interface Opportunity {
  id: string;
  title: string;
  description: string;
  responsibilities: string;
  requirements: string;
  idealCandidate: string;
  categories: string[];
  opType: "inPerson" | "remote" | "hybrid";
  startDate: string;
  endDate: string;
  deadline: string;
  location: string[];
  requiredSkills: string[];
  whenAndWhere: string;
  orgID: string;
  datePosted: string;
  status: "open" | "closed";
  applicantsCount: number;
  viewsCount: number;
  orgName: string;
  logoUrl: string | null;
  isBookmarked: boolean;
  isRolling: boolean;
  questions: string[] | null;
  perksAndBenefits: string[] | null;
  createdAt: string;
  updatedAt: string;
  orgPrimaryPhone: string;
  orgEmail: string;
  average_rating: number;
  total_reviews: number;
}

export const data = async (): Promise<Opportunity[]>=> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzU3Mjg4NGJkNzQ2ZTI5ZDAzMjg3ZSIsInJvbGUiOiJ1c2VyIiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3MjMwMzIyNTd9.W4qT0h67EUYm913hAw1-Z9DgyLP7vXnbi4GQZS1TBFY"https://akil-backend.onrender.com/'
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization":`Bearer ${token}`
    },

    
  };
  const res = await fetch(
    "https://akil-backend.onrender.com/opportunities/search",
    options
  );
  if(!res.ok){
    throw new Error('Network response was not ok')
  }
  const data = await res.json();

  return data.data 
};


export const singleData = async (id:string): Promise<Opportunity>=> {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2NzU3Mjg4NGJkNzQ2ZTI5ZDAzMjg3ZSIsInJvbGUiOiJ1c2VyIiwicHJvZmlsZVN0YXR1cyI6ImluY29tcGxldGUiLCJleHAiOjE3MjMwMzIyNTd9.W4qT0h67EUYm913hAw1-Z9DgyLP7vXnbi4GQZS1TBFY"https://akil-backend.onrender.com/'
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
            "Authorization":`Bearer ${token}`
    },
  };
  const res = await fetch(
    `https://akil-backend.onrender.com/opportunities/${id}`,
    options
  );
  if(!res.ok){
    throw new Error('Network response was not ok')
  }
  const data = await res.json();

  return data.data 
};
