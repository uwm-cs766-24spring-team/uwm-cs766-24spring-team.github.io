export default {
    logo: <span>Real-time Crowd Detection for Shared Facilities</span>,
    docsRepositoryBase: "https://github.com/uwm-cs766-24spring-team/psychic-umbrella",
    project: {
      link: 'https://github.com/uwm-cs766-24spring-team/psychic-umbrella'
    },
    chat: { },
    sidebar: {
      toggleButton: true,
    },
    footer:{
      text:<span>2024 © Made with ❤️ by Mondo, William and Lao </span>,
    },
    useNextSeoProps() {
      return {
        titleTemplate: '%s – Crowd Detection for Shared Facilities - CS766 Project',
      }
    },
    toc: {
      backToTop: true
    },
    editLink: {
      component: null
    },
    feedback: {
      content: 'Question? Give us feedback →',
      labels: 'feedback'
    }
  }
