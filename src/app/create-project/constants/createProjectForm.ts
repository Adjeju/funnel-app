export const steps = [
  "Start first project",
  "Projects details",
  "Create project",
];

export const categories = [
  "NFT",
  "GameFi",
  "DeFi",
  "DAO",
  "SocialFi",
  "Metaverse",
  "Tools",
  "Ecosystem",
  "Others",
];

export const goals = [
  "Grow My Community",
  "Activate Existing Members",
  "Understand My Members",
  "Other",
];

export const productsLaunches = ["Pre Product", "Post Product"];

export enum Steps {
  AddProjectStep = 0,
  GoalStep = 1,
  CreateProjectStep = 2,
}

export const stepFields = {
  [Steps.AddProjectStep]: ["name", "url", "category"],
  [Steps.GoalStep]: ["goal"],
  [Steps.CreateProjectStep]: ["numberOfWorkers", "launch", "email"],
};

export const formDefaultValues = {
  name: "",
  url: "",
  category: categories[0],
  goal: goals[0],
  numberOfWorkers: 1,
  launch: productsLaunches[0],
  email: "",
};
