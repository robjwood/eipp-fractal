module.exports = {
  title: 'Buttons',
  status: "wip",
  context: {
    button: {
      text: "Primary",
      purpose: "c-btn--primary",
      size: ''
    },
  },
  variants: [
    {
      name: "Secondary",
      context: {
        button: {
          text: "Secondary",
          purpose: "c-btn--secondary",
          size: ''
        }
      }
    },
    {
      name: "Tertiary",
      context: {
        button: {
          text: "Tertiary",
          purpose: "c-btn--tertiary",
          size: ''
        }
      }
    },
    {
      name: "Small",
      context: {
        button: {
          text: "Small",
          purpose: "c-btn--primary",
          size: 'c-btn--s'
        }
      }
    },
    {
      name: "Medium",
      context: {
        button: {
          text: "Medium",
          purpose: "c-btn--primary",
          size: 'c-btn--m'
        }
      }
    },
    {
      name: "Large",
      context: {
        button: {
          text: "Large",
          purpose: "c-btn--primary",
          size: 'c-btn--l'
        }
      }
    },
    {
      name: "Extra large",
      context: {
        button: {
          text: "Extra large",
          purpose: "c-btn--primary",
          size: 'c-btn--xl'
        }
      }
    },
  ],
  collated: false
}