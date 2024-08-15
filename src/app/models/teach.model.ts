export class Teach {
    constructor(
        public name: string,
        public short: string
      ) {}
    
      // Example method to get the full display name
      getDisplayName(): string {
        return `${this.name} (${this.short})`;
      }
    
      // Additional methods can be added here as needed
    }

