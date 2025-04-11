
export interface Meal {
  id: string;
  name: string;
  image: string;
}

export type MealPlanData = {
  breakfast: (Meal | null)[];
  lunch: (Meal | null)[];
  dinner: (Meal | null)[];
}

export interface Reservation {
  id: string;
  type: string;
  name: string;
  image: string;
  date: string;
  time: string;
  guests: number;
  status: 'confirmed' | 'pending';
}

export interface ServiceProvider {
  id: string;
  type: string;
  name: string;
  image: string;
  specialty: string;
  rating: number;
  date: string;
  time: string;
  status: 'confirmed' | 'pending';
}
