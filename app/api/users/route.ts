//http://localhost:3001/api/users

export async function GET() {
    const users = [
        { id: 1, name: 'John' }
    ];

    return new Response(JSON.stringify(users))
}