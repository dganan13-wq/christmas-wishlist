# Christmas Wishlist App - Design Guidelines

## Design Approach
**Reference-Based Design** drawing inspiration from Pinterest's visual card masonry and Instagram's image-forward aesthetic, adapted for a festive holiday experience. This app prioritizes visual delight and seasonal atmosphere while maintaining practical functionality for wishlist management.

## Design Philosophy
Create an immersive holiday experience that feels celebratory and gift-giving focused. Every interaction should evoke the warmth and excitement of the Christmas season through thoughtful visual hierarchy and generous use of festive imagery.

## Typography Hierarchy

**Primary Font**: Playfair Display (serif) for headlines - elegant, festive feel
**Secondary Font**: Inter (sans-serif) for body text and UI elements - clean, readable

**Scale**:
- Hero/Page Title: text-5xl md:text-6xl font-bold
- Section Headers: text-3xl md:text-4xl font-semibold  
- Card Titles: text-xl font-semibold
- Body Text: text-base
- Meta Info (price, store): text-sm font-medium
- Labels/Captions: text-xs uppercase tracking-wide

## Layout System

**Spacing Primitives**: Use Tailwind units of 2, 4, 6, 8, 12, 16, 20, 24
- Component padding: p-4 to p-6
- Section spacing: py-12 md:py-20
- Card gaps: gap-6
- Element margins: mb-4, mt-8, mx-2

**Grid Structure**:
- Mobile: Single column (grid-cols-1)
- Tablet: 2 columns (md:grid-cols-2)
- Desktop: 3 columns (lg:grid-cols-3)
- Container: max-w-7xl mx-auto px-4

## Page Structure

### Hero Section (50vh on mobile, 60vh on desktop)
- Full-width festive background image (winter scene with lights, ornaments, or snowy landscape)
- Centered content with title, tagline, and primary CTA
- Subtle overlay for text readability
- Primary button with blurred background (backdrop-blur-md) when over image

### Wishlist Display
- Masonry-style card grid (not forced equal heights)
- Each card contains: item image, title, description, price, store badge, purchase link, purchased toggle
- Asymmetric layout embracing natural content flow

### Add Item Form Section
- Two-column layout on desktop (form + preview)
- Single column on mobile
- Floating card design with backdrop effect

### Filter/Search Bar
- Sticky top navigation below header
- Inline filters (store, price range, purchased status)
- Search input with icon

## Component Library

### Wishlist Item Cards
- Rounded corners: rounded-2xl
- Padding: p-6
- Image: aspect-square or aspect-video, rounded-xl, mb-4
- Title + description + price vertically stacked
- Store badge: inline-flex items-center px-3 py-1 rounded-full text-xs
- Action buttons: full-width at bottom
- Hover: gentle lift effect (hover:shadow-xl transition-shadow)

### Buttons
- Primary CTA: px-8 py-3 rounded-xl font-semibold
- Secondary: px-6 py-2 rounded-lg
- Icon buttons: p-2 rounded-full
- When over images: backdrop-blur-md with semi-transparent background

### Input Fields
- Rounded: rounded-lg
- Padding: px-4 py-3
- Labels: mb-2 block text-sm font-medium
- Focus states: ring-2 ring-offset-2

### Store Badges
- Small pill shapes: rounded-full px-3 py-1
- Inline-flex with store icon
- Different visual treatment per store (via opacity variations, not color)

### Purchased Toggle
- Checkbox styled as festive ornament or gift icon
- Large touch target: min-h-12 min-w-12
- Visual feedback when checked (crossed-out text, reduced opacity on card)

## Background Treatment

### Primary Backgrounds
Use high-quality festive imagery throughout:
- Hero: Winter wonderland, Christmas lights, snowy scene
- Section dividers: Subtle patterns (snowflakes, ornaments) at low opacity
- Card backgrounds: Solid with subtle texture or gradient

### Overlay Strategy
- Hero overlays: gradient from transparent to semi-opaque
- Buttons over images: backdrop-blur-md with subtle background
- Modal/form overlays: backdrop-blur-sm

## Images

**Hero Image**: Large, full-width festive scene (twinkling lights, decorated tree, cozy winter setting) - conveys warmth and holiday spirit

**Item Images**: User-uploaded product photos - aspect-square preferred, rounded corners

**Decorative Elements**: Subtle snowflake SVGs, ornament icons for purchased items, gift box icons for CTAs

**Background Patterns**: Optional repeating subtle patterns (snowflakes, stars) at very low opacity for section breaks

## Navigation

### Header
- Sticky top position
- Logo/title left, navigation items right
- Transparent with blur effect: backdrop-blur-lg
- Border bottom for definition

### Footer
- Simple centered layout
- Links to add item, view all, filter
- Social sharing options
- Copyright and festive tagline

## Interaction Patterns

**Adding Items**: Modal or slide-in panel from right
**Marking Purchased**: Single click/tap on checkbox with immediate visual feedback
**Filtering**: Instant results without page reload
**Search**: Live search with debouncing

## Animations (Minimal)

- Gentle floating snowflakes in hero (CSS animation, very subtle)
- Card hover lifts: transform: translateY(-4px)
- Smooth transitions: transition-all duration-300
- Button scale on press: active:scale-95
- NO complex scroll-triggered animations
- NO distracting motion - keep focus on content

## Accessibility

- All interactive elements have min touch target of 44x44px
- Form inputs have associated labels
- Sufficient contrast for text readability
- Focus indicators on all interactive elements
- Alt text for all images
- Semantic HTML structure

## Responsive Behavior

- Mobile-first approach
- Cards stack single column < 768px
- Forms stack vertically on mobile
- Navigation collapses to hamburger menu on mobile
- Touch-friendly spacing on all interactive elements
- Hero scales appropriately across viewports (50vh mobile, 60vh desktop)