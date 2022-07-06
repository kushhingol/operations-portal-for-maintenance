import { addMaintenanceMockData, clearAllMaintenanceData, successLoginResponse, unsuccessfulLogin } from "./mockdData";

//Backend URL
const apiURL = "https://rugged-badlands-76158.herokuapp.com"

const login = () => {
    cy.intercept(`${apiURL}/api/users/login`, successLoginResponse);
    cy.visit("/");
    cy.get('input[type="email"]').type("test@test.com");
    cy.get('input[type="password"]').type("my-random-password");
    cy.contains("button", "Submit").click({ force: true });
    cy.url().should("include", "/dashboard");
}

describe("Integration test", () => {
  it("should be able to login", () => {
    login();
  });

  it("should be not be able to login", () => {
    cy.intercept(`${apiURL}/api/users/login`, unsuccessfulLogin);
    cy.visit("/");
    cy.get('input[type="email"]').type("test@test.com");
    cy.get('input[type="password"]').type("my-random-password");
    cy.contains("button", "Submit").click({ force: true });
    cy.contains("p", "Invalid Credentails ");
  });

  it('should be able to add new maintenance data', () => {
    cy.intercept(`${apiURL}/api/maintenance/add-maintenance`, addMaintenanceMockData);
    login();
    cy.get('input[id="name"]').type('Name')
    cy.get('input[id="startDate"]').type('2022-07-07')
    cy.get('input[id="startTime"]').type('20:52')
    cy.get('input[id="endDate"]').type('2022-07-26')
    cy.get('input[id="endTime"]').type('20:52');
    cy.contains('button', 'Submit').click({force: true});
    cy.contains('p', 'Maintenance Timeline Added Successfully')
  });

  it('should be able to clear all maintenance history records', () => {
    cy.intercept(`${apiURL}/api/maintenance/clear-maintenance-data`, clearAllMaintenanceData);
    login();
    cy.contains('button', 'Clear Maintenance Data').click({force: true});
    cy.on('window:alert',(t)=>{
        expect(t).to.contains('All records deleted');
     })
  })
});
