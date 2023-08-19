export const arrItemSidebar = [
  { id: 1, name: "Dashboard", icon: "fa-solid fa-house", subMenu: false },
  {
    id: 2,
    name: "Wallet",
    icon: "fa-solid fa-wallet",
    subMenu: [
      { id: 1, name: "Products", belongToTabParent: 2 },
      { id: 2, name: "Billing", belongToTabParent: 2 },
      { id: 3, name: "Invoice", belongToTabParent: 2 },
    ],
  },
  { id: 3, name: "Kanban", icon: "fa-brands fa-apple", subMenu: false },
  { id: 4, name: "Inbox", icon: "fa-solid fa-message", subMenu: false },
  {
    id: 5,
    name: "test",
    icon: "fa-solid fa-wallet",
    subMenu: [
      { id: 1, name: "Products", belongToTabParent: 5 },
      { id: 2, name: "Billing", belongToTabParent: 5 },
      { id: 3, name: "Invoice", belongToTabParent: 5 },
    ],
  },
];
