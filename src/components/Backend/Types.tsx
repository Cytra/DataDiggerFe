export default interface User {
    id: string | null;
    apiKey: string | null;
    email: string | null;
    created: string| null;
    membershipPlan: MembershipPlan | null
}

enum MembershipPlan {
    None,
    Silver,
    Gold,
    Diamond
}