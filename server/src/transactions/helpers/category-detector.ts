// import { TRANSACTION_CATEGORIES } from '../../utils/constants';

export class CategoryDetector {
  private categoryPatterns: Map<string, RegExp[]> = new Map();

  constructor() {
    this.initializePatterns();
  }

  private initializePatterns() {
    // Food & Dining
    this.categoryPatterns.set('Dining Out', [
      /restaurant|cafe|pizza|burger|starbucks|mcdonald|bistro|eatery|bar|pub|food/i,
    ]);

    this.categoryPatterns.set('Groceries', [
      /grocery|supermarket|whole foods|trader joe|safeway|kroger|costco|market/i,
    ]);

    // Transportation
    this.categoryPatterns.set('Transportation', [
      /uber|lyft|taxi|swift ride|bus|train|gas|fuel|parking|toll|transit/i,
    ]);

    // Entertainment
    this.categoryPatterns.set('Entertainment', [
      /movie|cinema|netflix|spotify|gaming|game|pixel|playstation|xbox|cinema/i,
    ]);

    // Shopping
    this.categoryPatterns.set('Shopping', [
      /amazon|walmart|target|mall|store|shop|boutique|retail|technova/i,
    ]);

    // Bills & Utilities
    this.categoryPatterns.set('Bills', [
      /electricity|water|gas|internet|phone|utility|bill|spark|aqua|nimbus|energy|ecofuel/i,
    ]);

    // Personal Care
    this.categoryPatterns.set('Personal Care', [
      /spa|salon|gym|fitness|health|care|wellness|serenity|doctor|clinic|pharmacy/i,
    ]);

    // Education
    this.categoryPatterns.set('Education', [
      /school|university|course|training|education|elevate|tutoring/i,
    ]);

    // Healthcare
    this.categoryPatterns.set('Healthcare', [
      /hospital|medical|doctor|pharmacy|health|dental|clinic/i,
    ]);
  }

  detectCategory(transactionName: string): string {
    for (const [category, patterns] of this.categoryPatterns) {
      for (const pattern of patterns) {
        if (pattern.test(transactionName)) {
          return category;
        }
      }
    }

    return 'General';
  }
}
