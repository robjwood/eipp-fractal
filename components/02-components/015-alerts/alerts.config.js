module.exports = {
  title: "Alerts",
  status: "wip",
  context: {
    alerts: {
      alertTypeClass: "",
      alertCopy: "This is the base version of the alert component"
    }
  },
  variants: [
    {
      name: "Info",
      context: {
        alerts: {
          alertTypeClass: "info",
          alertCopy: "This tells you something."
        }
      }
    },
    {
      name: "Success",
      context: {
        alerts: {
          alertTypeClass: "success",
          alertCopy: "This tells you that something you did was successful."
        }
      }
    },
    {
      name: "Caution",
      context: {
        alerts: {
          alertTypeClass: "caution",
          alertCopy: "This tells you to be aware of something."
        }
      }
    },
    {
      name: "Error",
      context: {
        alerts: {
          alertTypeClass: "error",
          alertCopy: "This tells you that something went wrong."
        }
      }
    }
  ],
  collated: false
};