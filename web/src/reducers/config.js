export default function config(
  state = {
    name: "Agnus E-School",
    description: "Agnus E-School Managment",
    url: "https://agnus-eschool.vercel.app",
    layout: "layout-1",
    collapsed: false,
    rightSidebar: false,
    backdrop: false,
  },
  action
) {
  switch (action.type) {
    case "SET_CONFIG":
      return {
        ...state,
        ...action.config,
      };
    case "SET_CONFIG_KEY":
      return {
        ...state,
        [`${action.key}`]: action.value,
      };
    default:
      return state;
  }
}
