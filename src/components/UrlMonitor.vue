<template>
  <div class="text-h5 mt-4">{{props.title}}</div>
  <v-card v-for="probe in probes" variant="outlined" class="probe-card">
    <v-card-title>
      <v-icon v-if="probe.type==='error'" :color="probeColor(probe)">
        mdi-alert-circle
      </v-icon>
      <v-icon v-if="probe.type!=='error'" :color="probeColor(probe)">
        mdi-checkbox-marked-outline
      </v-icon>
      {{probe.host}}
      <span class="text-subtitle-1">{{probe.type}}</span>
    </v-card-title>
    <v-card-text>
      <div v-if="probe.type === 'statfs'">
        <details>
          <summary>
            {{probeSummary(probe)}}
          </summary>
          <!--v-slider v-model="slider" :label="probe.type"
            reverse :color="probeColor(probe)" ></v-slider-->
          <v-table density="compact">
            <thead>
              <tr>
                <th>Value</th>
                <th>Property</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="prop in statfsProps">
                <td>{{probe.stateLog.state.json[prop.prop]}}</td>
                <td>{{prop.title}}</td>
              </tr>
            </tbody>
          </v-table>
        </details>
      </div>
      <div v-if="probe.type === 'play/segment'">
        <details>
          <summary>
            {{probeSummary(probe)}}
          </summary>
          <!--v-slider v-model="slider" :label="probe.type"
            reverse :color="probeColor(probe)" ></v-slider-->
          <pre>
            {{JSON.stringify(probe.stateLog.state,null,2)}}
          </pre>
        </details>
      </div>
      <div v-if="probe.type === 'error'">
        {{probe}}
      </div>
    </v-card-text>
  </v-card>
  <div class="legend">
    Legend:
    <div :style="`color:${COLOR_NORMAL}`">normal</div>
    <div :style="`color:${COLOR_ERROR}`">error</div>
    <div :style="`color:${COLOR_FROZEN}`">frozen</div>
    <div :style="`color:${COLOR_LEGACY}`">legacy</div>
  </div>
</template>
<script setup>
  import { defineProps, ref } from "vue";
  import { StateLog, UrlProbe } from "@sc-voice/state-log";
  const statfsProps = [{
    prop: 'blocks', 
    title: 'Total disk blocks (4096-byte)',
  },{
    prop: 'ffree_percent', 
    title: '% available file storage',
  },{
    prop: 'bavail_percent',
    title: '% available disk storage',
  }];
  var slider = ref(25);
  var probes = ref([]);
  var stagingProbe = ref({});
  const COLOR_NORMAL = "green";
  const COLOR_ERROR = "red";
  const COLOR_LEGACY = "grey";
  const COLOR_FROZEN = "orange";

  const props = defineProps({
    title: String,
    url: String,
  });

  console.log("UrlMonitor.setup()", props.title, props.url);

  function probeSummary(probe) {
    let { date, age, interval } = probe.stateLog;
    let t = (age*interval/(60*60000)).toFixed(3);
    return [
      probe.stateLog.date.toLocaleString(),
      `(${t} hours)`,
      probeVersion(probe),
    ].join(' ');
  }

  async function updateProbes() {
    const msg = 'UrlMonitor.updateProbes()';
    let url = new URL(props.url);
    try {
      let res = await UrlProbe.fetch(url);
      let json = await res.json();
      if (json instanceof Array) {
        probes.value = json.map(probe=>{
          let url = new URL(probe.url);
          probe.host = url.host;
          probe.stateLog = new StateLog(probe.stateLog);
          if (probe.type === 'statfs') {
            if (probe.host.search(/staging/i)>=0) {
              stagingProbe.value = probe;
            }
          }
          return probe;
        });
      }
    } catch(e) {
      probes.value = [{
        host: url.host,
        url,
        type: "error",
        error: e,
        stateLog: { state: 'ERROR-STATE' },
      }];
    }
  }

  function probeVersion(probe) {
    let { api_scvoice_version='' } = probe.stateLog.state.json;
    return probe.type === 'statfs' 
      ? `v${api_scvoice_version || "?.?.?"}` 
      : '';
  }

  function probeColor(probe) {
    let color;
    switch (probe.stateLog.state.status) {
      case 200:
        color = COLOR_NORMAL;
        break;
      default:
        color = COLOR_ERROR;
        break;
    }

    switch (probe.type) {
      case 'error': {
        color = COLOR_ERROR;
        break;
      }
      case 'statfs': {
        let [pmajor, pminor, ppatch] = probeVersion(probe).split('.');
        let [smajor, sminor, spatch] = 
           probeVersion(stagingProbe.value).split('.');
        if (sminor !== pminor || pmajor !== smajor) {
          color = COLOR_FROZEN;
        }
        break;
      }
      default: {
        color = COLOR_LEGACY;
        break;
      }
    }

    return color;
  }

  // Update display three times.
  // If more is needed, user should refresh page.
  updateProbes();
  setTimeout(async()=>updateProbes(), 5000);
  setTimeout(async()=>updateProbes(), 10000);

</script>
<style scoped>
.probe-card {
  border-color: 1pt solid rgba(256, 256, 256, 0.5);
  margin-bottom: 0.5em;
}
.legend {
  display: flex;
  flex-flow: row nowrap;
}
.legend div {
  margin-left: 0.5em;
  font-weight: 700;
}
</style>


