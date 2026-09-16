export interface SalaryTemplate {
  id: number
  min: number
  max: number
}

export const salaryTemplates: SalaryTemplate[] = [
  { id: 1, min: 5_000, max: 7_000 },
  { id: 2, min: 6_000, max: 9_000 },
  { id: 3, min: 7_000, max: 10_000 },
  { id: 4, min: 8_000, max: 12_000 },
  { id: 5, min: 10_000, max: 15_000 },
  { id: 6, min: 12_000, max: 18_000 },
]