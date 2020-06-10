module.exports = {
  title: "Notification",
  status: "wip",
  context: {
    notifications: [
      {
        modifierClass: "info",
        copy: "This conveys information that is likely to be useful to the user. They do not need to take any action."
      }
    ],
    alerts: [
      {
        modifierClass: "info",
        copy: "This conveys information that is likely to be useful to the user. If they need to take any action (such as closing the message or) then this pattern is used."
      }
    ]
  }, 
  variants: [
    {
      name: "Success",
      context: {
        notifications: [
          {
            modifierClass: "success",
            copy: "This tells the user that something they did was successful. They do not need to take any action."
          }
        ],
        alerts: [
          {
            modifierClass: "success",
            copy: "This tells the user that something they did was successful. If they need to take any action (such as closing the message or) then this pattern is used."
          }
        ]
      }
    },
    {
      name: "Caution",
      context: {
        notifications: [
          {
            modifierClass: "caution",
            copy: "This warns the user about something that has happened they need to be aware of. They do not need to take any action."
          }
        ],
        alerts: [
          {
            modifierClass: "caution",
            copy: "This tells you to be aware of something. If they need to take any action (such as closing the message or) then this pattern is used."
          }
        ]
      }
    },
    {
      name: "Error",
      context: {
        notifications: [
          {
            modifierClass: "error",
            copy: "This tells the user that there has been a problem. They do not need to take any action."
          }
        ],
        alerts: [
          {
            modifierClass: "error",
            copy: "This tells you that something went wrong. If the user needs to take any action (such as closing the message or) then this pattern is used."
          }
        ]
      }
    }
  ],
  collated: false
};


// module.exports = {
//   title: "Notification",
//   status: "wip",
//   context: {
//     notifications: [
//       {
//         modifierClass: "info",
//         copy: "This tells you something."
//       },
//       {
//         modifierClass: "success",
//         copy: "This tells you that something you did was successful."
//       },
//       {
//         modifierClass: "caution",
//         copy: "This tells you to be aware of something."
//       },
//       {
//         modifierClass: "error",
//         copy: "This tells you that something went wrong."
//       }
//     ],
//     alerts: [
//       {
//         modifierClass: "info",
//         copy: "This tells you something."
//       },
//       {
//         modifierClass: "success",
//         copy: "This tells you that something you did was successful."
//       },
//       {
//         modifierClass: "caution",
//         copy: "This tells you to be aware of something."
//       },
//       {
//         modifierClass: "error",
//         copy: "This tells you that something went wrong."
//       }
//     ]
//   }, 
//   collated: true
// };

//   variants: [
//     {
//       name: "Success",
//       context: {
//       }
//     },
//     {
//       name: "Caution",
//       context: {
//       }
//     },
//     {
//       name: "Error",
//       context: {
//         notifications: {
//           modifierClass: "error",
//           copy: "This tells you that something went wrong."
//         }
//       }
//     }
//   ],
//   collated: false
// };











// module.exports = {
//   title: "Notification",
//   status: "wip",
//   context: {
//     notifications: {
//       modifierClass: "info",
//       copy: "This tells you something."
//     }
//   },
//   variants: [
//     {
//       name: "Success notification",
//       context: {
//         notifications: {
//           modifierClass: "success",
//           copy: "This tells you that something you did was successful."
//         }
//       }
//     },
//     {
//       name: "Caution notification",
//       context: {
//         notifications: {
//           modifierClass: "caution",
//           copy: "This tells you to be aware of something."
//         }
//       }
//     },
//     {
//       name: "Error notification",
//       context: {
//         notifications: {
//           modifierClass: "error",
//           copy: "This tells you that something went wrong."
//         }
//       }
//     }
//   ],
//   collated: false
// };