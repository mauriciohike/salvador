const menus = {
  children: [
    {
      title: "Dashboards",
      to: "/dashboards",
      children: [
        {
          title: "Frete",
          to: "/dashboards/frete",
          children: [
            {
              title: "DEUSES",
              to: "/dashboards/frete/deuses",
              children: [],
            },
          ],
        },
        {
          title: "Coleta",
          to: "/dashboards/coleta",
          children: [],
        },
      ],
    },
    {
      title: "Transportadora",
      to: "/transportadora",
      children: [
        {
          title: "Cadastros",
          to: "/transportadora/cadastros",
          children: [],
        }
      ],
    },
    {
      title: "Financeiro",
      to: "/financeiro",
      children: [],
    },
  ]
}

export default menus;
