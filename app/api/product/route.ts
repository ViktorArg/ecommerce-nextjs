//http://localhost:3001/api/product
export async function GET() {
    const users = [
        {
            name: "Stranger Things Birthday Party Invitation", 
            category: "Invitations for Boys",
            subcategory: "cards",
            image: "/Stranger-Things-Birthday-Party-Invitation.webp",
            price: 99,
            description: "Phenomenal Stranger Things Birthday Party Invitation with a free backside included. Personalized digital invite for your baby boy or girl.",
            discount: 5
        }
    ];

    return new Response(JSON.stringify(users))
}