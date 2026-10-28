# Pollos Mario (`pollosmario.com`) & Sub-Sites — Complete Research Report

## 1. Site Overview & Architecture
- **Primary Domain**: `https://www.pollosmario.com/`
- **Platform**: Wix Thunderbolt (`metaSiteId`: `cc1add64-85ac-4d39-a5c2-0d9429828a12`, `siteId`: `afa1827b-f9c9-43b1-bf37-0d129f9fe246`, `siteRevision`: `227`)
- **Sitemap Last Modified**: `2026-03-24`
- **Global Footer Copy**: `©2024 by Pollos Mario | Site Under Construction`
- **Sitemap Pages (`pages-sitemap.xml`)**:
  1. `https://www.pollosmario.com/` (Wix Page ID: `xredq`, Title: `Locations`, HTML Title: `Home | POLLOS MARIO`)
  2. `https://www.pollosmario.com/orlando` (Wix Page ID: `iie6r`, Title: `Orlando`, HTML Title: `Home | POLLOS MARIO`)
  3. `https://www.pollosmario.com/orlandomenu` (Wix Page ID: `odsoo`, Title: `Menu`, HTML Title: `Menu | Pollos Mario`)
  4. `https://www.pollosmario.com/81` (Wix Page ID: `xn0mk`, Title: `Queens`, HTML Title: `Queens | Pollos Mario`)
  5. `https://www.pollosmario.com/81menu` (Wix Page ID: `zcy0r`, Title: `Menu`, HTML Title: `Menu | Pollos Mario`)
  6. `https://www.pollosmario.com/menus` (Wix Page ID: `qcv19`, Title: `Old Menu`, HTML Title: `English Menu | Pollos Mario`)
- **Technical Findings on `/orlandomenu` and `/81menu`**:
  - Both `/orlandomenu` (`comp-ks4b66xk`) and `/81menu` (`comp-ks4ala6c`) embed the legacy Wix **PDF File Viewer** third-party app (`appDefinitionId`: `13ee10a3-ecb9-7eff-4298-d2f9f34acf0d`, `widgetId`: `13ee10c2-daec-c6d3-c20b-64b8195e9150`, `widgetUrl`: `https://dev-wix-languages.appspot.com/widget`).
  - Because Wix deprecated that legacy app, the iframe on both `/orlandomenu` and `/81menu` redirects to `/apps/tpa-unavailable/` (`<title>App Unavailable</title>`), leaving the PDF menu area broken on both pages.
  - Meanwhile, the full text-based menu is still live and populated at `https://www.pollosmario.com/menus` (87 items across 11 categories).

---

## 2. All 5 Locations — Complete Details, Hours, Links & Copy

### Location 1: Orlando, FL (`02`)
- **Name**: Pollos Mario / Pollos a la Brasa Mario — Colombian Restaurant
- **Badge Number on Home Page**: `02`
- **Exact Address**:
  - Home page display: `8850 S. orange blossom trail, Orlando, Fl`
  - `/orlando` subpage display: `8850 South Orange Blossom Trail, Orlando FL 32809`
- **Phone Number**: `(407) 251-1111` / `407-251-1111`
- **Hours of Operation** (from `/orlando`):
  - **Sunday – Thursday**: `11AM - 10PM`
  - **Friday & Saturday**: `11AM - 11PM`
- **Email / Contact Info**:
  - Contact form on `https://www.pollosmario.com/orlando` (Fields: Name, Email, Phone, Subject, Message; Submit button: `Contact Us!`; Confirmation: `Thanks for submitting!`)
- **Internal & Directions Links**:
  - **Home Page**: `https://www.pollosmario.com/orlando`
  - **Menu Page**: `https://www.pollosmario.com/orlandomenu`
  - **Contact Us**: `https://www.pollosmario.com/orlando` (anchor `#adi_page1001_1_102`)
  - **Google Maps Directions**: `https://www.google.com/maps/dir//pollos+mario+orlando/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x88e77d1bd62d32f7:0xfcbcbcf0eeb07743?sa=X&ved=2ahUKEwiQuZHZr6PyAhVWbs0KHQA_DJgQ9RcwF3oECGQQBA`
- **Online Ordering Links**:
  - **ChowNow (Home page icon link)**: `https://direct.chownow.com/order/29353/locations/43390`
  - **ChowNow (`/orlando` & `/orlandomenu` 'Order Online' button)**: `https://ordering.chownow.com/order/29353/locations/43390`
  - **ChowNow (Alternate discovered)**: `https://ordernow.chownow.com/order/21495/locations/31535`
  - **DoorDash (Discovered)**: `https://www.doordash.com/store/pollos-a-la-brasa-mario-orlando-1065842/`
- **Social Links (Discovered)**:
  - **Instagram**: `https://www.instagram.com/pollosmariofl/` (`@pollosmariofl`)
  - **Facebook**: `https://www.facebook.com/p/Pollos-Mario-Orlando-FL-100063717258079/` (also `https://www.facebook.com/p/Pollos-Mario-Orlando-FL-100063991206100/`)
  - **Linktree**: None found on website or social profiles.
- **Storefront Photos**:
  - Square card photo: `orlando_storefront_square_IMG_5538_edited.jpg` (`b761be_31f7039a276349c4bdb05be135da491a~mv2.jpg`, `461x461`)
  - Wide hero banner photo: `orlando_storefront_wide_hero_IMG_5538_edited.jpg` (`b761be_b0b59ef3467e48eea3a849c068749d44~mv2.jpg`, `1024x461`)

---

### Location 2: Jackson Heights, Queens, NY (`#81`)
- **Name**: Pollos Mario / Pollos a la Brasa Mario #81 — Colombian Restaurant
- **Exact Address**:
  - Home page display: `8101 Roosevelt Ave, Jackson Heights, NY`
  - `/81` subpage display: `81-01 Roosevelt Ave, Jackson Heights, NY 11372`
- **Phone Number**: `(718) 639-5555`
- **Hours of Operation** (from `/81`):
  - **Mon – Thu**: `8:00AM - 11:59PM`
  - **Fri & Sat**: `Open 24 hours`
  - **Sunday**: `7:00 AM - 11:59PM`
- **Email / Contact Info**:
  - Contact form on `https://www.pollosmario.com/81` (Fields: Name, Email, Phone, Subject, Message; Submit button: `Contact Us!`; Confirmation: `Thanks for submitting!`)
- **Internal & Directions Links**:
  - **Home Page**: `https://www.pollosmario.com/81`
  - **Menu Page**: `https://www.pollosmario.com/81menu`
  - **Contact Us**: `https://www.pollosmario.com/81`
  - **Google Maps Directions**: `https://www.google.com/maps/place/81-01+Roosevelt+Ave,+Flushing,+NY+11372/@40.7477604,-73.8869538,17z/data=!3m1!4b1!4m5!3m4!1s0x89c25fa9170342e1:0xa0011cfd2624b43c!8m2!3d40.7477604!4d-73.8847598`
- **Online Ordering Links** (on Home, `/81`, and `/81menu`):
  - **Grubhub**: `https://www.grubhub.com/restaurant/pollos-a-la-brasa-mario-81-8101-roosevelt-ave-queens/2192445?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
  - **UberEats**: `https://www.ubereats.com/new-york/food-delivery/pollos-a-la-brasa-mario/Rc2JNCm8Q_itFo8gmHKkXw/?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
- **Storefront Photo**:
  - `jackson_heights_81_storefront.jpg` (`b761be_84297641311c49da8728f08448d92a0d~mv2.jpg`, `1024x768`)

---

### Location 3: Brentwood, Long Island, NY
- **Name**: Pollos Mario Steak House & Seafood — Brentwood
- **Exact Address**: `78 Wicks Rd, Brentwood, NY 11717`
- **Phone Number**: `(631) 617-5140` (linked on home page to Google search `https://www.google.com/search?q=pollos+mario+78+Wicks+Rd%2C+Brentwood`)
- **Hours of Operation** (not on Wix page; from UberEats/directories):
  - **Sunday – Thursday**: `11:00 AM - 8:15 PM`
  - **Friday – Saturday**: `11:00 AM - 9:15 PM`
- **Directions Link**:
  - **Google Maps Directions**: `https://www.google.com/maps/dir//pollos+mario+78+Wicks+Rd,+Brentwood/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89e831ee486b2faf:0xbf9c62d3f5b80404?sa=X&ved=2ahUKEwiEye-BrKPyAhWMVc0KHQcWD1QQ9RcwE3oECFkQBA`
- **Online Ordering Links** (on Home page):
  - **UberEats**: `https://www.ubereats.com/store/pollos-mario-brentwood/UwPkhnGxR4K1Xz4R1OeX8g?pl=JTdCJTIyYWRkcmVzcyUyMiUzQSUyMjgxMDElMjBSb29zZXZlbHQlMjBBdmUlMjIlMkMlMjJyZWZlcmVuY2UlMjIlM0ElMjI2NGE2OWYyNi0xYWVlLTM5NGQtMTMzYS0yZTA5YmRhMmI0YTElMjIlMkMlMjJyZWZlcmVuY2VUeXBlJTIyJTNBJTIydWJlcl9wbGFjZXMlMjIlMkMlMjJsYXRpdHVkZSUyMiUzQTQwLjc0NzU3OSUyQyUyMmxvbmdpdHVkZSUyMiUzQS03My44ODQ0NiU3RA%3D%3D`
- **Storefront Photo**:
  - `brentwood_storefront_o.jpg` (`b761be_b4bae2cc8d10415a88d364d0ae37da50~mv2.jpg`, `1000x750`)

---

### Location 4: Hempstead, Long Island, NY
- **Name**: Pollos Mario Steak House & Seafood — Hempstead
- **Exact Address**: `75 N Franklin St, Hempstead, NY 11550`
- **Phone Number**: `(516) 505-3200` / `516-505-3200` (linked on `pollosmario.com` to Google search `https://www.google.com/search?q=pollos+mario+long+island`)
- **Hours of Operation** (from `https://pollosmariorestaurant.com/`):
  - **Monday to Thursday**: `11:00 am – 9:00 pm`
  - **Friday**: `11:00 am – 10:00 pm`
  - **Saturday**: `10:00 am – 10:00 pm`
  - **Sunday**: `10:00 am – 9:00 pm`
  - *Note on `/about-us/` body*: lists `Monday to Thursday 11 am – 9 pm | Friday 11 am – 10 pm | Saturday – Sunday 10 am – 10 pm`; `/contact/` body also notes `Sunday- Saturday 10 am – 10 pm | We are open for inside and outside dining`.
- **Website & Subpages (`pollosmariorestaurant.com`)**:
  - **Home Page**: `https://www.pollosmariorestaurant.com/` (resolves to `https://pollosmariorestaurant.com/`)
  - **Menu / Order Online link on `pollosmario.com`**: `https://www.pollosmariorestaurant.com/order-online/` (returns **HTTP 404 Not Found**)
  - **Actual Live Menu Page on `pollosmariorestaurant.com`**: `https://pollosmariorestaurant.com/menu/`
  - **About Us Page**: `https://pollosmariorestaurant.com/about-us/`
  - **Gallery Page**: `https://pollosmariorestaurant.com/gallery/`
  - **Contact Page**: `https://pollosmariorestaurant.com/contact/`
- **Directions Links**:
  - **Google Maps (from `pollosmario.com`)**: `https://www.google.com/maps/dir//pollos+mario+long+island/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x89c27d1f28b58c31:0x25cc62a28256c8e4?sa=X&ved=2ahUKEwjRg4WpqaPyAhWKHc0KHdufBzQQ9RcwE3oECGcQBQ`
  - **Google Maps Shortlink (Header)**: `https://bit.ly/37i9iyz`
  - **Google Maps Shortlink (Contact page)**: `https://goo.gl/maps/gn1ARyVzS5xXTp3g8`
- **Online Ordering Links** (from `pollosmario.com`):
  - **Grubhub**: `https://www.grubhub.com/restaurant/pollos-mario-steak-house--seafood-75-n-franklin-st-hempstead/1411262?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
  - **Seamless**: `https://www.seamless.com/menu/pollos-mario-steak-house--seafood-75-n-franklin-st-hempstead/1411262?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
  - **Postmates**: `https://postmates.com/store/pollos-mario-steak-house-%26-seafood/_fC8l91qQlOjO_tZQ46ccQ?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
- **Social Links** (from `pollosmariorestaurant.com` header/footer):
  - **Facebook**: `https://www.facebook.com/PollosMarioHempstead/`
  - **Instagram**: `https://www.instagram.com/pollosmario_hempstead/`
  - **Twitter / X**: `https://twitter.com/pollosmarioli`
  - **Yelp**: `https://www.yelp.com/biz/pollos-mario-steak-house-and-seafood-hempstead`
  - **TripAdvisor**: `https://www.tripadvisor.com/Restaurant_Review-g47880-d3636120-Reviews-Pollos_Mario_Restaurant-Hempstead_Long_Island_New_York.html`
- **Exact Copy on `pollosmariorestaurant.com`**:
  - **Hero Slider**:
    - `DELICIOUS QUALITY IN EVERY BITE` (`VIEW MENU`)
    - `FRESHLY PREPARED WITH YOU IN MIND` (`VIEW MENU`)
    - `A GRILLING EXPERIENCE` (`VIEW MENU`)
  - **Intro Section**:
    - `Pollos Mario — Steak House & Seafood`
    - `Offers a friendly environment, and unique decoration that will transport you to a world outside of New York; Pollos Mario has an international cuisine in Hempstead Long Island.` (`LEARN MORE`)
  - **Our Dishes**:
    - `Paella Marinera` (`https://pollosmariorestaurant.com/product/paella-marinera-2/`)
    - `Grilled Skirt Steak – ENTRAÑA` (`https://pollosmariorestaurant.com/product/grilled-skirt-steak/`)
    - `Grilled Sirloin Steak – CHURRASCO` (`https://pollosmariorestaurant.com/product/grilled-sirloin-steak-2/`)
    - `PARRILLADA` (`https://pollosmariorestaurant.com/product/parrillada-2/`)
    - `Surf & Turf – MAR Y TIERRA` (`https://pollosmariorestaurant.com/product/surf-turf/`)
    - `Seafood Chowder – ASOPADO` (`https://pollosmariorestaurant.com/product/seafood-chowder-2/`)
  - **Natural Drinks Section**:
    - `NATURAL DRINKS — The perfect dish, deserves the perfect drink. that’s why we re prepare our juices whit the freshest ingredients!` (`VIEW MENU`)
  - **Menu Page (`/menu/`) Featured Items**:
    - Categories listed: `Appetizers | Chicken | Meats | Seafood | Salads | Breakfast | Children's Menu | Soups | Side Orders | Desserts | Beverages`
    - Featured WooCommerce items on `/menu/`:
      - `Juices in water- JUGOS EN AGUA` ($5.00)
      - `Calentado Antioqueño` ($9.00)
      - `French Fries – PAPAS FRITAS` ($12.50 – $25.00 catering / $5.00 regular)
      - `Chicken Nuggets – NUGGETS DE POLLO` ($33.00 – $66.00 tray)
      - `Chicken Fingers – DEDITOS DE POLLO` ($25.50 – $76.00 tray)
      - `French Chicken breast – PECHUGA FRANCESA` ($9.50 – $84.00)
      - `SALMON MARIO` ($21.50)
      - `Chicken and Potato Soup (Wednesday) – AJIACO` ($3.50 – $11.00)
      - `EMPANADAS` ($0.95 – $1.90)
      - `Pork Rind With 3 Arepas – CHICHARRON CON 3 AREPAS` ($8.25)
      - `Colombian Sausage with 2 Arepas – CHORIZO CON AREPA` ($5.50)

---

### Location 5: Queens / Woodhaven (Rego Park), NY
- **Name**: Pollos Mario Woodhaven / Pollos a la Brasa Mario ("El Palacio de los Frisoles")
- **Exact Address**:
  - `pollosmario.com` display: `6320 Woodhaven Blvd, Queens, NY 11374`
  - `orderpollosmariowoodhaven.edan.io` display: `63-20 Woodhaven Blvd, Rego Park, NY 11374, United States`
  - Coordinates: `40.7237, -73.8693`
- **Phone Number**: `(718) 565-2055` / `+1 718-565-2055` (linked on `pollosmario.com` to Google search `https://www.google.com/search?q=pollos+mario+woodhaven`)
- **Hours of Operation**:
  - From `orderpollosmariowoodhaven.edan.io`: **Monday – Sunday**: `10 am–10:30 pm`
  - From historical/directory listing: **Mon – Thu**: `10:00 AM – 12:00 AM`, **Fri – Sun**: `9:00 AM – 12:00 AM`
- **Email / Contact Info**:
  - Discovered email: `pollosmariowoodhavenblvd@gmail.com`
- **Website & Subpage Links on `pollosmario.com`**:
  - **Home Page**: `http://orderpollosmariowoodhaven.com/index.php` (redirects via 301 to `https://orderpollosmariowoodhaven.edan.io/`)
  - **Directions**: `http://orderpollosmariowoodhaven.com/location.php` (redirects to `https://orderpollosmariowoodhaven.edan.io/`)
  - **Menu**: `http://orderpollosmariowoodhaven.com/menus.php` (redirects to `https://orderpollosmariowoodhaven.edan.io/`)
  - **Google Maps CID**: `https://www.google.com/maps?cid=6583025759480345279`
- **Online Ordering Links** (on `pollosmario.com`):
  - **Grubhub**: `https://www.grubhub.com/restaurant/pollos-a-la-brasa-mario-63-20-woodhaven-blvd-rego-park/74395?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
  - **DoorDash**: `https://www.doordash.com/store/pollos-mario-woodhaven-queens-980269/?utm_campaign=gpa`
  - **Seamless**: `https://www.seamless.com/menu/pollos-a-la-brasa-mario-63-20-woodhaven-blvd-rego-park/74395?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
  - **Postmates**: `https://postmates.com/store/pollos-mario-woodhaven/sru-f-GtQ-qtNl4lH6XkTg?utm_source=google&utm_medium=organic&utm_campaign=place-action-link`
- **Exact Copy on `orderpollosmariowoodhaven.edan.io`**:
  - `Pollos Mario Woodhaven — Latin American restaurant`
  - `63-20 Woodhaven Blvd, Rego Park, NY 11374, United States | +1 718-565-2055`
  - `Latest Feedback:`
    - `"Great atmosphere, staff, food, portions & reasonable $'s!!!"`
    - `"We all eat and enjoy - rice, beans, steak, chicharon, fried egg and avocado!"`
    - `"Great service, great prices, great food, and great people."`
- **Storefront Photo**:
  - `woodhaven_storefront_801_10944265.jpg` (`b761be_271286ec119c4abb8847be1d1c3a3ad9~mv2.jpg`, `1200x900`)

---

## 3. Complete Menu (`https://www.pollosmario.com/menus` — "English Menu")

### Appetizers
- **Shrimp Cocktail** — `$8.95`
- **Fried Calamari** — `$7.95`
- **Mozzarella Sticks** — `$5.25`
- **Empanada** (Options: *Beef*, *Chicken*) — `$1.75`
- **Shrimp in Garlic Sauce or Breaded** — `$12`

### Salads
- **Tossed Salad** — `$4.25`
- **Avocado Salad** — `$7.25`
- **Chicken Salad** — `$9.95`

### Soups
- **Chicken Consommé (Lg)** — *Includes rice, salad, and corn cake.* — `$7.95`
- **Chicken Consommé (Sm)** — *Chicken soup with corn cake.* — `$3.95`
- **Soup of the Day** — *The daily soup by itself in a 32 oz container.* — `$4.95`
- **Monday: Ajiaco** — *Hearty chicken soup made with potatoes and corn on the cob. Optional cilantro and milk cream.* — `$9.95`
- **Tuesday: Vegetable Soup** — `$9.95`
- **Wednesday: Beef Tripe Soup (Mondongo)** — `$9.95`
- **Thursday: Green Plantain Soup** — `$9.95`
- **Friday: Fish Stew** — `$12.95`
- **Saturday: Hen Stew** — `$12.95`
- **Sunday: Oxtail Stew** — `$12.95`

### Chicken Specialties
- **Rotisserie Chicken Platter** — *1/4 Chicken, consommé soup, rice, french fries, and salad.* — `$11.25`
- **Mixed Rice with Chicken** — *Includes salad and sweet plantains.* — `$10.50`
- **Breaded Chicken Cutlet** — *Breaded chicken breast. Comes with salad, rice, beans, and French fries.* — `$14.25`
- **Grilled Chicken Breast** — *Comes with salad, yellow rice, and french fries.* — `$14.25`
- **Whole Rotisserie Chicken** — *One full rotisserie chicken.* — `$9.95`
- **Half Rotisserie Chicken** — `$5.95`

### Kids Menu
- **Chicken Fingers** — *Also called chicken tenders. Comes with French fries.* — `$8.75`

### Seafood
- **Seafood Combination Casserole** — *Includes salad, rice, and French fries.* — `$23.95`
- **Sauteed Red Snapper** — *Includes salad, rice, potato, cassava, and plantains.* — `$27.95`
- **Fried Red Snapper** — *Includes salad, rice, and fried green plantains.* — `$26.95`
- **Shrimps in Garlic Sauce, Breaded, or Creole Sauce** — *Includes salad, white rice, and French fries.* — `$19.95`
- **Rice with Shrimp** — *Includes salad and French fries.* — `$17.95`
- **Fillet of Flounder (Breaded)** — *Includes salad, rice, and French fries.* — `$13.95`
- **Seafood Chowder** — *Includes salad, rice, and French fries.* — `$26.95`
- **Cream of Shrimp** — *Includes salad, rice, and French fries.* — `$15.95`
- **Sauteed Seafood** — *Includes salad, rice, and French fries.* — `$28.95`
- **Ocean Rice** — *Mixed yellow rice with seafood. Includes salad and French fries.* — `$27.50`
- **Sirloin Steak topped w/Seafood** — *Includes salad, rice, and French fries.* — `$31.95`

### Typical Dishes
- **Mario's Special Platter** — *Grilled steak, pork loin, pork grind, and 1/4 chicken. Includes French fries, rice, beans, and salad.* — `$22.50`
- **Aguacatala Special Platter** — *Sirloin steak with salad, rice, beans, and guacamole.* — `$19.50`
- **Grilled Sirloin Steak** — *Includes rice, salad, and French fries.* — `$23.95`
- **Skirt Steak** — *Includes salad, grilled potatoes, rice, and beans.* — `$23.95`
- **Country Platter "Campesina"** — *Ground beef, pork rind, rice, beans, egg, sweet plantain, avocado, and corn cake.* — `$14.95`
- **Country Platter "Tipica"** — *Grilled top round steak, rice, beans, pork rind, egg, avocado, sweet plantain, and corn cake.* — `$15.25`
- **Top Round Steak** — *Topped with onions and served with salad, rice, beans, and sweet plantain.* — `$13.95`
- **Grilled Top Round Steak with Arepa** — *Grilled steak accompanied with a colombian-style arepa topped with melted cheese.* — `$13.95`
- **Beans with Pork** — *Rice, beans, pork rind, sweet plantain, avocado, and corn cake.* — `$12.95`
- **Breaded Pork Loin** — *Includes salad, rice, beans, and sweet plantains.* — `$14.95`
- **Grilled Porkchops** — *Includes salad, rice, beans, and sweet plantain.* — `$13.25`
- **Mario's Picada** — *Chopped short ribs, pork loin, beef, pork rinds, sausage, plantains, and corn cake.* — `$24.95`

### Side Orders
- **Fried Green Plantains** — `$4.95`
- **Fried Sweet Plantains** — `$3.95`
- **French Fries** — `$3.25`
- **Fried Cassavas** — `$3.95`
- **Steamed Cassavas** — `$4.95`
- **White Rice (Large)** — `$4.75`
- **White Rice (Small)** — `$3.75`
- **Yellow Rice (Large)** — `$5.50`
- **Yellow Rice (Small)** — `$4.25`
- **Ground Beef (Colombian Style)** — `$4.75`
- **Pork Rind w/Corn Cake** — `$3.95`
- **Chopped Pork Rinds (For Two People)** — `$7.50`
- **Sausage** — `$3.95`
- **Colombian Mazamorra (Small)** — `$4.25`
- **Colombian Mazamorra (Large)** — `$5.15`
- **Colombian Arepa w/Cheese** — *A large, flat, colombian corn cake (arepa) topped with melted cheese.* — `$4.25`
- **Corncakes (3 Mini Arepas)** — `$2.75`
- **Beans (Large)** — *\*\*Beans may contain pork used to add flavor.\*\** — `$4.95`
- **Beans (Small)** — *\*\*Beans may contain pork used to add flavor.\*\** — `$2.95`
- **Avocado Salad** — `$7.25`
- **Sliced Avocado** — `$5.25`
- **Boiled Potatos** — `$3.50`
- **Guacamole** — `$5.75`
- **Hogao** — *A Colombian sauce eaten with meats, arepas, rice, and other dishes.* — `$4.50`

### Desserts
- **Figs w/Cheese & Arequipe** — *Colombian-style figs stuffed with Dulce de Leche (Arequipe).* — `$6.25`
- **Flan Tres Leches** — `$4.25`
- **Cheese Cake** — `$4.25`
- **Rice Pudding** — *Sweet rice pudding with optional cinnamon powder on top.* — `$3.50`
- **Ice Cream (Vanilla or Chocolate)** — `$3.25`
- **Lava Cake with Ice Cream** — *A hot cake with melted chocolate inside and served with vanilla ice cream.* — `$7.50`

### Juices
- **Passion Fruit (Maracuya)** — `$3.95`
- **Blackberry (Mora)** — `$3.95`
- **Sour Sop (Guanabana)** — `$3.95`
- **Guayaba (Guava)** — `$3.95`
- **Lulo** — `$3.95`
- **Papaya** — `$3.95`
- **Mango** — `$3.95`
- **Pineapple (Piña)** — `$3.95`
- **Strawberry (Fresa)** — `$3.95`
- **Freshly Squeezed Orange Juice** — *Oranges are freshly squeezed right after you order.* — `$4.75`
- **Home Made Lemonade** — *Juice made from blending whole lemons.* — `$4.50`
- **Pitcher of Lemonade** — `$20`

### Beverages
- **Colombiana** — `$1.95`
- **Coca Cola** — `$1.95`
- **Coke Zero** — `$1.95`
- **Diet Coke** — `$1.95`
- **Manzana Postobon** — *Apple flavored soda from Colombia.* — `$1.95`
- **Postobon Uva (Grape Soda)** — `$1.75`
- **Brisk Iced Tea** — `$1.95`
- **Apple Juice** — `$1.95`
- **Pitcher of Sangria (Large)** — `$22.95`
- **Pitcher of Sangria (Small)** — `$13.50`
- **Glass of Sangria** — `$6`

### Hot Beverages
- **Colombian Coffee** — `$1.75`
- **Glass of Milk** — `$1.95`
- **Black Coffee (Tinto)** — `$0.75`
- **Cappuccino** — `$2.95`
- **Espresso** — `$2.50`
- **Hot Tea** — `$1.75`

---

## 4. Downloaded Original Photos Inventory (`/Volumes/CIA-System/WEBSITE-CLIENTS/PollosMario/research/original_photos/`)

All 13 Wix media files from `pollosmario.com` have been downloaded in full uncropped resolution (both under their exact Wix media ID and under a descriptive filename), along with the `menus` side image and 25 original brand/food/gallery images from `pollosmariorestaurant.com`:

| Descriptive Filename | Wix Media ID | Dimensions | Size | Description |
| :--- | :--- | :--- | :--- | :--- |
| `orlando_storefront_square_IMG_5538_edited.jpg` | `b761be_31f7039a276349c4bdb05be135da491a~mv2.jpg` | `461x461` | 62.9 KB | Orlando night storefront (square card image on `/`) |
| `orlando_storefront_wide_hero_IMG_5538_edited.jpg` | `b761be_b0b59ef3467e48eea3a849c068749d44~mv2.jpg` | `1024x461` | 136.6 KB | Orlando wide panoramic night storefront (hero on `/orlando`) |
| `jackson_heights_81_storefront.jpg` | `b761be_84297641311c49da8728f08448d92a0d~mv2.jpg` | `1024x768` | 202.0 KB | Jackson Heights (81-01 Roosevelt Ave) dusk exterior storefront |
| `brentwood_storefront_o.jpg` | `b761be_b4bae2cc8d10415a88d364d0ae37da50~mv2.jpg` | `1000x750` | 81.4 KB | Brentwood (78 Wicks Rd) night exterior storefront with neon sign & rooster |
| `hempstead_storefront_local2-2.jpg` | `b761be_782ec12eff204c279a742773dc03ad11~mv2.jpg` | `2000x1200` | 902.8 KB | Hempstead (75 N Franklin St) daytime stone & terracotta exterior |
| `woodhaven_storefront_801_10944265.jpg` | `b761be_271286ec119c4abb8847be1d1c3a3ad9~mv2.jpg` | `1200x900` | 204.7 KB | Woodhaven (63-20 Woodhaven Blvd) daytime storefront ("El Palacio de los Frisoles") |
| `home_section_bg_wood_texture.jpg` | `bb5967be28cc4bcfbdb91b75efb8ec98.jpg` | `5183x2444` | 9.34 MB | Full-res dark wood plank background texture on `/` |
| `icon_chownow.png` | `b761be_f595e700872f4d9e9479bfd0e207d924~mv2.png` | `2143x817` | 47.1 KB | ChowNow "Order Now" red button badge |
| `icon_grubhub.png` | `b761be_70d03df0dffe43a786802e1f1f1f4588~mv2.png` | `399x201` | 4.3 KB | Grubhub button badge |
| `icon_ubereats.png` | `b761be_bc961f1bd2ac47b897f7edcfea21826d~mv2.png` | `399x201` | 3.4 KB | UberEats button badge |
| `icon_seamless.jpg` | `b761be_44dd4fbcd03845fe8093e0f3efea50fd~mv2.jpg` | `1200x630` | 64.5 KB | Seamless logo badge |
| `icon_postmates.png` | `b761be_860f91c03be749eaa42262017b67419f~mv2.png` | `399x201` | 3.7 KB | Postmates button badge |
| `icon_doordash.png` | `b761be_a664147f40a84d2ca7a977b372d12c8c~mv2.png` | `399x201` | 6.9 KB | DoorDash button badge |
| `menus_side_image.7077f229.jpeg` | *(Parastorage OOI)* | `3009x3009` | 835.9 KB | Wix Restaurants Menus decorative side image on `/menus` |
| `hempstead_logo_pollos_mario.jpg` | *(WordPress upload)* | `1190x249` | 76.7 KB | Official Pollos Mario rooster mascot + "POLLOS MARIO Steak House & Seafood" logo |
| `hempstead_site/*` (25 files) | *(WordPress uploads)* | up to `2000x1200` | ~9.2 MB total | High-res food photos (Paella Marinera, Entraña, Churrasco, Parrillada, Asopado, Fajitas, Bandeja/Carne, Lengua, Tostones con Guacamole, etc.) & hero banners from `pollosmariorestaurant.com` |
