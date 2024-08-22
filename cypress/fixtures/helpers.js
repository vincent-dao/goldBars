

/**
 * Gets elements usiing `id`
 *
 * @param dataAttribute   The id's selector
 */
export function getId(dataAttribute) {
  return cy.get(`[id="${dataAttribute}"]`);
}