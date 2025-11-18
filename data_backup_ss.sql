--
-- PostgreSQL database dump
--

\restrict JQ4tBOg4Ufadbbktb71qAb2rPtOaAiuMbQOgCNhChJKZ7iaW9XMebFmBich1Pex

-- Dumped from database version 17.6 (Debian 17.6-1.pgdg13+1)
-- Dumped by pg_dump version 17.6 (Debian 17.6-1.pgdg13+1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET transaction_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Data for Name: __drizzle_migrations; Type: TABLE DATA; Schema: drizzle; Owner: sunraku
--

INSERT INTO drizzle.__drizzle_migrations (id, hash, created_at) VALUES (1, 'f6c682873781628f81f12affd4853cef267d342a1a84be648fba710391eb241f', 1759997627785);
INSERT INTO drizzle.__drizzle_migrations (id, hash, created_at) VALUES (2, '32b81885cf472eb82106c54911acbd9f3a943da3b028dc7de7d9833faac4fa27', 1760038211837);
INSERT INTO drizzle.__drizzle_migrations (id, hash, created_at) VALUES (3, 'ff0cdd2eb758cb21f1bc8b0295c7eeaab1d99cd381dc97d42af9da398dd4ff2e', 1760209046361);


--
-- Data for Name: user; Type: TABLE DATA; Schema: public; Owner: sunraku
--

INSERT INTO public."user" (id, name, email, email_verified, image, created_at, updated_at) VALUES ('YIdOdSB0mg7CE7WvdSHtprEIFjPiRtqZ', 'Karan Sethia', 'karansethia24@gmail.com', false, NULL, '2025-10-21 19:01:31.039', '2025-10-21 19:01:31.039');


--
-- Data for Name: account; Type: TABLE DATA; Schema: public; Owner: sunraku
--

INSERT INTO public.account (id, account_id, provider_id, user_id, access_token, refresh_token, id_token, access_token_expires_at, refresh_token_expires_at, scope, password, created_at, updated_at) VALUES ('Lu9cn6zKUVgGXvImN33MDxbSbRCNCHOh', 'YIdOdSB0mg7CE7WvdSHtprEIFjPiRtqZ', 'credential', 'YIdOdSB0mg7CE7WvdSHtprEIFjPiRtqZ', NULL, NULL, NULL, NULL, NULL, NULL, '46b84c698c2d5fb64fa2f8a26cc5593e:2f3cb7826077a92275e10a6078f322d7c8f545af57fa0e53bf8f5280c194b70ecc46331e3a2b831ca951cef7e12ef5c03a9850329fa73187a9884f6dfa3344b6', '2025-10-21 19:01:31.046', '2025-10-21 19:01:31.046');


--
-- Data for Name: blogs; Type: TABLE DATA; Schema: public; Owner: sunraku
--

INSERT INTO public.blogs (id, blog_title, blog_content, author, created_at, hero_image, blog_excerpt, slug) VALUES (5, 'Hydroponics: The Future of Urban Farming', '<h2>Urban Farming Simplified</h2><p>Hydroponics enables efficient food production with minimal space. Here’s how it’s redefining agriculture in cities.</p><img src="/images/hydroponics.jpg" alt="Hydroponic Farming" />', 'Aarav Mehta', '2025-10-11 20:59:49.075535', 'https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztqM1h9Ok8H6AfTjCcdrnJSBkV4YQNt5bEgaUO', 'Exploring how hydroponic systems are making fresh food accessible in urban environments.', 'hydroponics-the-future-of-urban-farming');
INSERT INTO public.blogs (id, blog_title, blog_content, author, created_at, hero_image, blog_excerpt, slug) VALUES (1, 'The Future of Smart Farming in India', '<h2>Smart Farming Revolution</h2><p>Smart farming technologies are transforming how we grow food. From IoT sensors to AI-driven soil analysis, innovation is at the heart of modern agriculture.</p><img src="/images/smart-farming.jpg" alt="Smart Farming" />', 'Sprout Society', '2025-10-11 20:59:49.075535', 'https://vfelwsk30v.ufs.sh/f/QRThuNrgyqzteLnrODvN4qCXBt5G8Fo3Y1hMOjmaS0IyulfN', 'How IoT, AI, and data-driven decisions are shaping the next era of Indian agriculture.', 'future-of-smart-farming-in-india');
INSERT INTO public.blogs (id, blog_title, blog_content, author, created_at, hero_image, blog_excerpt, slug) VALUES (4, 'Meet the Farmers Behind the Sprout Society Movement', '<h2>Empowering Local Farmers</h2><p>At the core of Sprout Society’s mission are passionate farmers embracing innovation and sustainability.</p><img src="/images/farmers.jpg" alt="Farmers Team" />', 'Sprout Society', '2025-10-11 20:59:49.075535', 'https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztLKwSPA5vwFT5AbEuCpXQH3VKyNxtle2rhS6f', 'Stories from the farmers who inspire our vision for a sustainable future.', 'meet-the-farmers-behind-the-sprout-society-movement');
INSERT INTO public.blogs (id, blog_title, blog_content, author, created_at, hero_image, blog_excerpt, slug) VALUES (3, '5 Agro-Tech Innovations Changing the World', '<h2>Innovations to Watch</h2><p>From autonomous tractors to drone crop monitoring, these are the top innovations reshaping agriculture globally.</p><img src="/images/agrotech-innovations.jpg" alt="Agro-Tech Innovations" />', 'Karan Sethia', '2025-10-11 20:59:49.075535', 'https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztjD8zQ9coQ0GVX3sKc5uqFlSP7AWaihrZmUJ4', 'A curated list of cutting-edge agro-tech solutions redefining farming efficiency.', '5-agro-tech-innovations-changing-the-world');
INSERT INTO public.blogs (id, blog_title, blog_content, author, created_at, hero_image, blog_excerpt, slug) VALUES (6, 'Impact of Indigenous Farming on Global Food Production and Distribution', '<h2><strong>Introduction: Rediscovering Ancient Wisdom in Modern Agriculture</strong></h2><p>In the ever-evolving landscape of global agriculture, the conversation often revolves around innovation, technology, and industrial-scale production. Yet, hidden within centuries-old traditions lies a wealth of agricultural knowledge that continues to shape sustainable food systems today — <strong>indigenous farming</strong>. Rooted deeply in community values, local ecology, and harmony with nature, indigenous farming practices not only support food security but also influence how food is produced and distributed across the world.</p><p>At <strong>Sprout Society</strong>, we believe that reconnecting with these ancestral methods can offer valuable lessons for building a resilient and equitable global food network — one that respects both people and the planet.</p><hr><h2><strong>Understanding Indigenous Farming</strong></h2><p>Indigenous farming refers to agricultural practices developed by native and local communities over generations. These systems are shaped by an intimate understanding of local soil, climate, and biodiversity. From the <strong>terraced rice paddies of Southeast Asia</strong> to the <strong>milpa systems of Central America</strong> and the <strong>Zai pits of West Africa</strong>, indigenous farmers have long cultivated food in ways that ensure both productivity and sustainability.</p><p>Rather than focusing solely on yield, indigenous farming emphasizes <strong>balance and regeneration</strong>. Techniques like crop rotation, intercropping, organic composting, and water conservation minimize waste and restore soil fertility naturally. These methods often produce diverse, nutrient-rich crops while preserving ecosystems — a principle modern agriculture is beginning to relearn.</p><hr><h2><strong>Sustainability and Biodiversity: The Cornerstones of Indigenous Agriculture</strong></h2><p>One of the most profound impacts of indigenous farming on global food systems is its contribution to <strong>biodiversity</strong>. Unlike monoculture systems that exhaust the soil and rely heavily on synthetic fertilizers, indigenous farming fosters <strong>crop diversity</strong> — a critical factor in combating pests, diseases, and climate change.</p><p>For instance, indigenous communities in the Andes cultivate <strong>dozens of potato varieties</strong>, each adapted to different altitudes and weather conditions. This diversity not only strengthens local resilience but also provides the global food market with genetic resources that are vital for breeding climate-resistant crops.</p><p>Moreover, indigenous methods of managing water — such as the <strong>Apatani wet rice cultivation in India</strong> or the <strong>qanat systems in Iran</strong> — showcase how traditional irrigation can sustain agriculture in even the harshest conditions without depleting natural resources.</p><hr><h2><strong>Economic and Social Impact on Food Distribution</strong></h2><p>Beyond production, indigenous farming plays a significant role in shaping <strong>food distribution networks</strong>. These communities often rely on local trade and cooperative systems rather than large-scale commercial channels. This approach strengthens <strong>rural economies</strong>, reduces dependence on global supply chains, and ensures that profits remain within farming communities.</p><p>When indigenous farmers connect with markets through fair-trade initiatives or community-supported agriculture programs, consumers gain access to <strong>ethically produced, high-quality food</strong>. At Sprout Society, we’ve seen firsthand how supporting such networks — through farmer-buyer partnerships and government advocacy — leads to more inclusive and equitable food systems.</p><hr><h2><strong>Challenges and the Path Forward</strong></h2><p>Despite their value, indigenous farming systems face immense challenges. Land dispossession, lack of policy support, and climate change threaten traditional agricultural knowledge. Globalization has also introduced market pressures that often undervalue sustainable practices in favor of mass production.</p><p>However, integrating indigenous wisdom into modern agricultural policies offers a way forward. Governments and organizations can collaborate with local farmers to <strong>protect indigenous land rights</strong>, <strong>fund agroecological research</strong>, and <strong>promote knowledge exchange</strong> between traditional and scientific farming communities.</p><hr><h2><strong>Conclusion: Cultivating a Shared Future</strong></h2><p>Indigenous farming is not a relic of the past — it is a living, evolving system that continues to nurture people and the planet. As global food production faces increasing stress from population growth and environmental degradation, embracing these time-tested practices could hold the key to long-term sustainability.</p><p>At <strong>Sprout Society</strong>, our mission is to empower farmers by bridging traditional wisdom with modern opportunity. By uplifting indigenous voices, fostering cooperation between farmers and businesses, and advocating for supportive agricultural policies, we can create a food system that is both <strong>sustainable and just</strong>.</p><h3>The future of global food production does not rest solely in technological advancement —<mark> it lies in </mark><strong><mark>learning from the roots</mark></strong><mark> that have sustained humanity for centuries.</mark></h3><p></p>', 'Mereoleona Vermillion', '2025-11-03 23:19:12.124', 'https://ik.imagekit.io/sproutsocietygallery/sprout-society-uploads/farmer_Az8MtHvY3.webp?updatedAt=1761658680756', 'Indigenous farming blends ancient wisdom with sustainable practices that protect the environment and enrich food diversity. These traditional methods strengthen local economies while promoting fair and ethical food distribution. By embracing indigenous knowledge, we can build a more resilient and equitable global food system.', 'impact-of-indigenous-farming-on-global-food-production-and-distribution');
INSERT INTO public.blogs (id, blog_title, blog_content, author, created_at, hero_image, blog_excerpt, slug) VALUES (2, 'Precision Agriculture: Case Study on Crop Yield Optimization', '<h2>Case Study: Increasing Crop Yield</h2><p>Through precision agriculture techniques, farmers achieved a 20% increase in yield while reducing water usage by 15%.</p><p></p>', 'Sprout Society Research', '2025-11-05 19:29:39.137', 'https://vfelwsk30v.ufs.sh/f/QRThuNrgyqztlchFkWStJ7zVqpFBSaW5vhZTQUeLYyKxDiMC', 'A real-world look at how technology is improving farming outcomes sustainably.', 'precision-agriculture:-case-study-on-crop-yield-optimization');


--
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: sunraku
--

INSERT INTO public.categories (id, category_name, category_slug) VALUES (1, 'Agriculture', 'agriculture');
INSERT INTO public.categories (id, category_name, category_slug) VALUES (2, 'Agro-Tech', 'agro-tech');
INSERT INTO public.categories (id, category_name, category_slug) VALUES (3, 'Case Study', 'case-study');
INSERT INTO public.categories (id, category_name, category_slug) VALUES (4, 'Featured', 'featured');
INSERT INTO public.categories (id, category_name, category_slug) VALUES (5, 'Innovation', 'innovation');
INSERT INTO public.categories (id, category_name, category_slug) VALUES (6, 'Environment Report', 'environment-report');
INSERT INTO public.categories (id, category_name, category_slug) VALUES (7, 'Climate', 'climate');
INSERT INTO public.categories (id, category_name, category_slug) VALUES (8, 'Test Category', 'test-category');


--
-- Data for Name: blog_category_junction; Type: TABLE DATA; Schema: public; Owner: sunraku
--

INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (1, 2);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (1, 5);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (2, 1);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (2, 3);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (3, 2);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (3, 4);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (3, 5);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (4, 1);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (4, 4);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (5, 2);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (5, 5);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (6, 1);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (6, 3);
INSERT INTO public.blog_category_junction (blog_id, category_id) VALUES (6, 4);


--
-- Data for Name: session; Type: TABLE DATA; Schema: public; Owner: sunraku
--

INSERT INTO public.session (id, expires_at, token, created_at, updated_at, ip_address, user_agent, user_id) VALUES ('lsPoLpEUbNfBKbtgSOuNLOMYVcVTtn0W', '2025-10-28 19:01:31.05', 'IgWqof6rUsHJ8dpTyNpJrkpkzgDF7P92', '2025-10-21 19:01:31.05', '2025-10-21 19:01:31.05', '', '', 'YIdOdSB0mg7CE7WvdSHtprEIFjPiRtqZ');
INSERT INTO public.session (id, expires_at, token, created_at, updated_at, ip_address, user_agent, user_id) VALUES ('hMh4kn9tULyvzksFJl1PQiDap3kxQRKS', '2025-11-12 06:26:34.406', 'qHy4RmatGX8UQm5ddqmjYCcJskqoLSBx', '2025-11-03 22:21:48.979', '2025-11-05 06:26:34.406', '', '', 'YIdOdSB0mg7CE7WvdSHtprEIFjPiRtqZ');
INSERT INTO public.session (id, expires_at, token, created_at, updated_at, ip_address, user_agent, user_id) VALUES ('LARCemp7AB4BDZs4CaCyxPgbB1mtf9Hd', '2025-11-25 20:36:15.777', 'ds1C0izjXPkNjkK1EOqEt9bxEmvQjsvV', '2025-11-13 18:47:03.066', '2025-11-18 20:36:15.777', '', '', 'YIdOdSB0mg7CE7WvdSHtprEIFjPiRtqZ');


--
-- Data for Name: verification; Type: TABLE DATA; Schema: public; Owner: sunraku
--



--
-- Name: __drizzle_migrations_id_seq; Type: SEQUENCE SET; Schema: drizzle; Owner: sunraku
--

SELECT pg_catalog.setval('drizzle.__drizzle_migrations_id_seq', 3, true);


--
-- Name: account_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sunraku
--

SELECT pg_catalog.setval('public.account_id_seq', 1, false);


--
-- Name: blogs_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sunraku
--

SELECT pg_catalog.setval('public.blogs_id_seq', 7, true);


--
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sunraku
--

SELECT pg_catalog.setval('public.categories_id_seq', 8, true);


--
-- Name: session_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sunraku
--

SELECT pg_catalog.setval('public.session_id_seq', 1, false);


--
-- Name: user_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sunraku
--

SELECT pg_catalog.setval('public.user_id_seq', 1, false);


--
-- Name: verification_id_seq; Type: SEQUENCE SET; Schema: public; Owner: sunraku
--

SELECT pg_catalog.setval('public.verification_id_seq', 1, false);


--
-- PostgreSQL database dump complete
--

\unrestrict JQ4tBOg4Ufadbbktb71qAb2rPtOaAiuMbQOgCNhChJKZ7iaW9XMebFmBich1Pex

