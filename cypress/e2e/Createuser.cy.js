describe('New User', () => {

     let apiUrl = "https://gorest.co.in/public/v2";

     let accessToken = "844668a86931ef81cdf574d364bd5262c318c60e051eab4365213f0f76cd34fc"

    
    it('Create User', () => {
        cy.request({
            method:"POST",
            url:`${apiUrl}/users`,
            headers :{
                  authorization:`Bearer ${accessToken}`
            },
            body: {
                "name": "Testing",
                "gender":"male",
                "email": "testing@gmail.com",
                "status": "active"
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
        })
        
    });
    
});