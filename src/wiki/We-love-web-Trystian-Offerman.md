# We ♥ Web – 21st of November

With Trystian Offerman from Decathlon, about working with styleguides, design systems, and components.

Trystian studied at CMD from 2010 until 2018 and has worked for several companies, including bol.com, until 2024. He is now working at Decathlon.

Decathlon is a French company active in 79 countries, with offices in Nantes, Paris, Lille, and Amsterdam.
The Amsterdam office focuses mainly on e-commerce and data.

Trystian started by explaining how Decathlon works with an upper funnel and lower funnel system.

## Upper Funnel and Lower Funnel

The upper funnel consists of elements such as the homepage, search functionality, and listing pages — basically any interaction before the shopping cart.
The lower funnel includes components like the shopping cart and checkout.

### Teams

Decathlon has many teams, each responsible for different parts of the website, such as navigation, product pages, CMS, SEO, and the product API. The product page team includes engineering managers, product managers, designers, content designers, UX designers, and frontend engineers.

### Tech Stack

Decathlon uses:

- Next.js with TypeScript
- React for components
- Node.js for packages
- API's for data like products
  All developers work from a single repository with daily deployments.

### Design System

A design system is a central source that contains the visual interaction patterns and code standards used to create a consistent user experience.

Decathlon uses a design system for guidelines, reusable components, modules, and templates, including design tokens, internationalization, and theming.
The foundation includes colors, typography, and spacing.

#### Why adopt a design system?

- Ensures consistency
- Increases efficiency by enabling faster component creation
- Improves scalability: designs can be adapted without losing quality
- Enhances collaboration between design and development
- Ensures higher quality through stable components, best practices, and accessibility
- Simplifies onboarding and training

Decathlon avoids using multiple frameworks for the design system to reduce complexity and testing overhead.
Frontend library: includes components like buttons, accordions, and foundation elements.

#### What should not be in a design system?

- Page-specific UIs
- Complete pages
- Experiments or product-specific features

### Developer Portal & Sandbox

Decathlon provides a developer portal and sandbox to test component properties and functionalities.
This platform includes tools like a vision simulator and skeleton viewer (for items that are still loading).
