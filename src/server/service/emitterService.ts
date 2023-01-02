const emitterList: EmitterItem[] = [];
const verboseLogging = process.env.APP_LOGGING === "verbose";

export const emitter: Emitter = {
  once: function (emitterName, options) {
    // console.log('>> once ' + emitterName);
  },

  on: (emitterName, functionToExecute) => {
    // console.log('>> on ' + emitterName, functionToExecute);
    emitterList.push({
      emitterName: emitterName,
      functionToExecute: functionToExecute,
    });
  },

  emit: async function (emitterName, options) {
    if (verboseLogging) {
      console.log("*** emit >> " + emitterName);
    }
    // console.log('list', emitterList);

    //TODO: ordering

    //filter by current emiiterName
    let emitters = emitterList.filter((x) => x.emitterName === emitterName);

    //execute the functions
    for (let index = 0; index < emitters.length; index++) {
      let subscriber = emitters[index];
      // console.log('executing...' + subscriber.functionToExecute, "on " + subscriber.emitterName);

      try {
        await subscriber.functionToExecute(options);
      } catch (error) {
        console.log("EMIT ERROR:", error);
      }
    }
  },
};

export default emitter;
