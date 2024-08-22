

export function getId(dataAttribute) {
  return cy.get(`[id="${dataAttribute}"]`);
}