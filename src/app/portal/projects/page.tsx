'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface ProjectDoc {
  id: string
  title: string
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced'
  domain: string
  shortDesc: string
  overview: string
  objectives: string[]
  deliverables: string[]
  techStack: string[]
  timeline: { phase: string; tasks: string }[]
}

const ALL_PROJECTS: ProjectDoc[] = [

  // ── WEB DEVELOPMENT ──────────────────────────────────────────────────────────
  {
    id: 'wd-1', domain: 'Web Development', difficulty: 'Beginner',
    title: 'Personal Portfolio Website',
    shortDesc: 'Design and deploy a responsive personal portfolio with projects, skills, and contact section.',
    overview: 'Build a professional portfolio website from scratch using HTML, CSS, and JavaScript. The site must be fully responsive, SEO-optimized, and deployed on a live URL. This project simulates what every frontend developer needs as their first real deliverable.',
    objectives: ['Create responsive multi-section layout', 'Implement smooth scroll and animations', 'Add contact form with validation', 'Deploy to Vercel or Netlify', 'Score 90+ on Lighthouse performance'],
    deliverables: ['Live deployed URL', 'GitHub repository with clean commits', 'README with setup instructions', 'Lighthouse report screenshot'],
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Vercel'],
    timeline: [
      { phase: 'Week 1', tasks: 'Design wireframes, set up project structure, build header and hero section' },
      { phase: 'Week 2', tasks: 'Build projects, skills, and about sections with responsive CSS' },
      { phase: 'Week 3', tasks: 'Add contact form, animations, cross-browser testing' },
      { phase: 'Week 4', tasks: 'Deploy, SEO optimization, performance tuning, final submission' },
    ],
  },
  {
    id: 'wd-2', domain: 'Web Development', difficulty: 'Beginner',
    title: 'Task Management App',
    shortDesc: 'Build a CRUD todo app with local storage persistence and drag-and-drop support.',
    overview: 'Develop a fully functional task manager where users can create, update, delete, and reorder tasks. Data must persist across browser sessions using localStorage. This project teaches state management and DOM manipulation fundamentals.',
    objectives: ['Implement full CRUD operations', 'Persist data with localStorage', 'Add drag-and-drop reordering', 'Filter tasks by status and priority', 'Build clean, minimal UI'],
    deliverables: ['GitHub repo with deployed app', 'All CRUD operations working', 'Drag-and-drop functional', 'Mobile responsive layout'],
    techStack: ['React', 'CSS Modules', 'localStorage API', 'react-beautiful-dnd', 'Vercel'],
    timeline: [
      { phase: 'Week 1', tasks: 'Set up React project, build task list and add task form' },
      { phase: 'Week 2', tasks: 'Implement edit, delete, status toggle, localStorage sync' },
      { phase: 'Week 3', tasks: 'Add drag-and-drop, filters, priority badges' },
      { phase: 'Week 4', tasks: 'Polish UI, deploy, write documentation' },
    ],
  },
  {
    id: 'wd-3', domain: 'Web Development', difficulty: 'Intermediate',
    title: 'E-Commerce Product Catalog',
    shortDesc: 'Build a full product catalog with filters, cart functionality, and Stripe payment integration.',
    overview: 'Create a production-ready e-commerce frontend with product listing, search, filters, cart, and checkout. Integrate Stripe for payments and use a headless CMS or JSON API for product data. This mirrors real work done at startups building online stores.',
    objectives: ['Build product listing with search and filters', 'Implement shopping cart with state management', 'Integrate Stripe checkout', 'Build order confirmation flow', 'Deploy with CI/CD pipeline'],
    deliverables: ['Live deployed app with working checkout', 'GitHub repo', 'Stripe test mode working', 'README with env setup'],
    techStack: ['Next.js', 'Tailwind CSS', 'Stripe', 'Zustand', 'Vercel'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Product listing, search, category filters, responsive grid' },
      { phase: 'Week 3', tasks: 'Cart state, add/remove/update quantity, cart drawer' },
      { phase: 'Week 4-5', tasks: 'Stripe integration, checkout page, order confirmation' },
      { phase: 'Week 6', tasks: 'Testing, deployment, performance optimization' },
    ],
  },
  {
    id: 'wd-4', domain: 'Web Development', difficulty: 'Intermediate',
    title: 'Real-Time Chat Application',
    shortDesc: 'Build a multi-room chat app with real-time messaging, user authentication, and online presence.',
    overview: 'Develop a WhatsApp-style chat application using WebSockets or Firebase Realtime Database. Users can register, create rooms, send messages, and see who is online. This project teaches real-time systems — a critical skill for modern web development.',
    objectives: ['Implement user auth with JWT or Firebase', 'Real-time messaging with WebSocket/Firebase', 'Multi-room support', 'Online/offline presence indicators', 'Message read receipts'],
    deliverables: ['Live app with real-time messaging', 'Auth working (signup/login)', 'At least 3 chat rooms', 'GitHub repo with docs'],
    techStack: ['React', 'Firebase Realtime DB', 'Firebase Auth', 'Tailwind CSS', 'Vercel'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Auth flow, user profile, protected routes' },
      { phase: 'Week 3', tasks: 'Chat UI, Firebase setup, real-time message sending' },
      { phase: 'Week 4-5', tasks: 'Rooms, presence system, read receipts' },
      { phase: 'Week 6', tasks: 'Polish, notifications, deploy' },
    ],
  },
  {
    id: 'wd-5', domain: 'Web Development', difficulty: 'Advanced',
    title: 'SaaS Dashboard with Multi-Tenancy',
    shortDesc: 'Build a multi-tenant SaaS platform with role-based access, analytics dashboard, and billing.',
    overview: 'Design and develop a production-grade SaaS application supporting multiple organizations, user roles (admin, member, viewer), usage analytics, and Stripe subscription billing. This is the architecture behind products like Notion, Linear, and Vercel.',
    objectives: ['Multi-tenant data isolation', 'Role-based access control (RBAC)', 'Real-time analytics dashboard', 'Stripe subscription billing', 'Audit logs and activity feed'],
    deliverables: ['Deployed SaaS app with working auth', 'Multi-tenant isolation verified', 'Stripe billing working', 'Admin and member roles functional'],
    techStack: ['Next.js', 'Supabase', 'Stripe', 'Recharts', 'Tailwind CSS', 'Vercel'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Auth, org creation, invite system, RBAC setup' },
      { phase: 'Week 3-4', tasks: 'Dashboard UI, analytics charts, data isolation' },
      { phase: 'Week 5', tasks: 'Stripe subscriptions, billing portal, plan limits' },
      { phase: 'Week 6', tasks: 'Audit logs, notifications, testing, deploy' },
    ],
  },

  // ── DATA SCIENCE ─────────────────────────────────────────────────────────────
  {
    id: 'ds-1', domain: 'Data Science', difficulty: 'Beginner',
    title: 'Exploratory Data Analysis on Sales Data',
    shortDesc: 'Perform end-to-end EDA on a real retail dataset and present key business insights.',
    overview: 'You will work with a real-world retail sales dataset to perform comprehensive exploratory data analysis. The goal is to uncover patterns, outliers, and actionable insights that a business team could use to make decisions.',
    objectives: ['Clean and preprocess raw dataset', 'Identify trends, seasonality, outliers', 'Build 10+ visualizations', 'Write business insight report', 'Present findings in slides'],
    deliverables: ['Jupyter notebook with full EDA', 'PDF report with insights', '5-slide summary presentation', 'GitHub repo'],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Seaborn', 'Jupyter'],
    timeline: [
      { phase: 'Week 1', tasks: 'Load dataset, handle missing values, data types, basic stats' },
      { phase: 'Week 2', tasks: 'Univariate and bivariate analysis, distribution plots' },
      { phase: 'Week 3', tasks: 'Correlation heatmaps, time-series trends, segment analysis' },
      { phase: 'Week 4', tasks: 'Write report, build presentation, submit' },
    ],
  },
  {
    id: 'ds-2', domain: 'Data Science', difficulty: 'Beginner',
    title: 'Customer Churn Prediction Model',
    shortDesc: 'Build a classification model to predict which customers are likely to churn using telecom data.',
    overview: 'Using the Telco Customer Churn dataset, build and evaluate a machine learning model that predicts customer churn. This project introduces the full ML pipeline: data cleaning, feature engineering, model training, evaluation, and interpretation.',
    objectives: ['Preprocess and engineer features', 'Train Logistic Regression and Random Forest', 'Evaluate with precision, recall, F1, ROC-AUC', 'Identify top churn factors', 'Deploy model as simple Flask API'],
    deliverables: ['Jupyter notebook with model training', 'Flask API endpoint', 'Model evaluation report', 'GitHub repo'],
    techStack: ['Python', 'Scikit-learn', 'Pandas', 'Flask', 'Matplotlib'],
    timeline: [
      { phase: 'Week 1', tasks: 'EDA, handle imbalanced classes, feature engineering' },
      { phase: 'Week 2', tasks: 'Train multiple models, hyperparameter tuning' },
      { phase: 'Week 3', tasks: 'Model evaluation, SHAP feature importance' },
      { phase: 'Week 4', tasks: 'Flask API, documentation, submission' },
    ],
  },
  {
    id: 'ds-3', domain: 'Data Science', difficulty: 'Intermediate',
    title: 'Recommendation System for E-Commerce',
    shortDesc: 'Build a collaborative filtering recommendation engine using real purchase history data.',
    overview: 'Design and implement a product recommendation system similar to what Amazon uses. You will implement collaborative filtering (user-based and item-based) and optionally matrix factorization (SVD). Test the system against held-out data and measure recommendation quality.',
    objectives: ['Implement user-based and item-based CF', 'Build matrix factorization with SVD', 'Evaluate with RMSE and hit rate', 'Build simple web UI to demo recommendations', 'Compare cold-start handling strategies'],
    deliverables: ['Jupyter notebook with full implementation', 'Demo UI or API', 'Evaluation metrics report', 'GitHub repo'],
    techStack: ['Python', 'Surprise library', 'Pandas', 'NumPy', 'Flask/Streamlit'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Data preparation, user-item matrix, user-based CF' },
      { phase: 'Week 3', tasks: 'Item-based CF, SVD matrix factorization' },
      { phase: 'Week 4-5', tasks: 'Evaluation, cold-start handling, demo UI' },
      { phase: 'Week 6', tasks: 'Documentation, final testing, submission' },
    ],
  },
  {
    id: 'ds-4', domain: 'Data Science', difficulty: 'Intermediate',
    title: 'Time Series Forecasting — Stock Price Prediction',
    shortDesc: 'Build ARIMA and LSTM models to forecast stock prices and compare their accuracy.',
    overview: 'Use real historical stock data (via yfinance) to build both statistical (ARIMA) and deep learning (LSTM) forecasting models. Evaluate both on test data and present a comparison. This project is directly applicable to fintech, supply chain, and demand planning roles.',
    objectives: ['Fetch and preprocess time series data', 'Build ARIMA model with tuned parameters', 'Build LSTM with proper windowing', 'Compare models on RMSE and MAPE', 'Visualize predictions vs actuals'],
    deliverables: ['Jupyter notebook', 'Model comparison report', 'Visualizations', 'GitHub repo'],
    techStack: ['Python', 'yfinance', 'statsmodels', 'TensorFlow/Keras', 'Matplotlib'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Data collection, stationarity tests, ARIMA modeling' },
      { phase: 'Week 3-4', tasks: 'LSTM architecture, training, sequence windowing' },
      { phase: 'Week 5', tasks: 'Model comparison, error analysis, visualization' },
      { phase: 'Week 6', tasks: 'Report writing, submission' },
    ],
  },
  {
    id: 'ds-5', domain: 'Data Science', difficulty: 'Advanced',
    title: 'End-to-End MLOps Pipeline',
    shortDesc: 'Build a production ML pipeline with experiment tracking, model registry, and automated retraining.',
    overview: 'Design a complete MLOps workflow for a classification problem. The pipeline must include experiment tracking (MLflow), model registry, containerized serving (Docker + FastAPI), and automated retraining trigger when model performance degrades.',
    objectives: ['Set up MLflow experiment tracking', 'Build automated retraining pipeline', 'Containerize model serving with Docker', 'Monitor model drift', 'CI/CD with GitHub Actions'],
    deliverables: ['Working MLflow dashboard', 'Dockerized FastAPI serving endpoint', 'GitHub Actions CI/CD pipeline', 'Architecture diagram and documentation'],
    techStack: ['Python', 'MLflow', 'FastAPI', 'Docker', 'GitHub Actions', 'Scikit-learn'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'MLflow setup, experiment tracking, model registry' },
      { phase: 'Week 3', tasks: 'FastAPI serving, Docker containerization' },
      { phase: 'Week 4', tasks: 'Drift monitoring, retraining trigger logic' },
      { phase: 'Week 5', tasks: 'GitHub Actions CI/CD pipeline' },
      { phase: 'Week 6', tasks: 'Documentation, architecture diagram, submission' },
    ],
  },

  // ── ARTIFICIAL INTELLIGENCE ───────────────────────────────────────────────────
  {
    id: 'ai-1', domain: 'Artificial Intelligence', difficulty: 'Beginner',
    title: 'Sentiment Analysis API',
    shortDesc: 'Build and deploy a sentiment analysis API using pre-trained HuggingFace transformers.',
    overview: 'Use a pre-trained BERT-based model from HuggingFace to classify text sentiment (positive/negative/neutral). Wrap it in a FastAPI endpoint, test it on real product reviews, and deploy it to a cloud platform.',
    objectives: ['Load and use HuggingFace pipeline', 'Build FastAPI wrapper', 'Test on Amazon product reviews', 'Add batch inference endpoint', 'Deploy to Hugging Face Spaces or Railway'],
    deliverables: ['Live API endpoint', 'Test results on 500+ reviews', 'GitHub repo', 'API documentation'],
    techStack: ['Python', 'HuggingFace Transformers', 'FastAPI', 'Uvicorn', 'Docker'],
    timeline: [
      { phase: 'Week 1', tasks: 'HuggingFace setup, test sentiment pipeline locally' },
      { phase: 'Week 2', tasks: 'FastAPI wrapper, single and batch endpoints' },
      { phase: 'Week 3', tasks: 'Test on real data, accuracy evaluation' },
      { phase: 'Week 4', tasks: 'Deploy, write API docs, submit' },
    ],
  },
  {
    id: 'ai-2', domain: 'Artificial Intelligence', difficulty: 'Intermediate',
    title: 'Document Q&A System with RAG',
    shortDesc: 'Build a Retrieval-Augmented Generation system that answers questions from uploaded documents.',
    overview: 'Implement a RAG pipeline where users upload PDFs and ask questions. The system chunks documents, embeds them into a vector store, retrieves relevant chunks, and passes them to an LLM for answer generation.',
    objectives: ['Build PDF ingestion and chunking pipeline', 'Embed chunks with sentence-transformers', 'Store and query vectors with Chroma or FAISS', 'Integrate OpenAI or open-source LLM', 'Build simple chat UI'],
    deliverables: ['Working RAG system with UI', 'Tested on 3+ different document types', 'GitHub repo', 'Architecture diagram'],
    techStack: ['Python', 'LangChain', 'ChromaDB', 'OpenAI API', 'Streamlit', 'PyPDF2'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'PDF loading, chunking strategy, embedding setup' },
      { phase: 'Week 3', tasks: 'Vector store integration, retrieval pipeline' },
      { phase: 'Week 4', tasks: 'LLM integration, prompt engineering' },
      { phase: 'Week 5', tasks: 'Streamlit UI, multi-document support' },
      { phase: 'Week 6', tasks: 'Testing, documentation, deployment' },
    ],
  },
  {
    id: 'ai-3', domain: 'Artificial Intelligence', difficulty: 'Intermediate',
    title: 'Computer Vision — Object Detection App',
    shortDesc: 'Fine-tune YOLOv8 on a custom dataset and build a real-time detection web app.',
    overview: 'Train a YOLOv8 model on a custom annotated dataset. Build a web interface where users upload images or use a webcam feed to see real-time detections. Applicable to manufacturing, retail, and security industries.',
    objectives: ['Annotate 200+ images with Roboflow', 'Fine-tune YOLOv8 on custom data', 'Achieve 80%+ mAP on test set', 'Build real-time inference web app', 'Deploy to cloud'],
    deliverables: ['Trained model weights', 'Live demo app', 'Training metrics report', 'GitHub repo'],
    techStack: ['Python', 'YOLOv8 (Ultralytics)', 'Roboflow', 'Gradio', 'OpenCV'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Dataset collection, annotation, data augmentation' },
      { phase: 'Week 3', tasks: 'Model fine-tuning, hyperparameter search' },
      { phase: 'Week 4', tasks: 'Evaluation, confusion matrix, error analysis' },
      { phase: 'Week 5', tasks: 'Gradio web app, real-time inference' },
      { phase: 'Week 6', tasks: 'Deploy, documentation, submission' },
    ],
  },
  {
    id: 'ai-4', domain: 'Artificial Intelligence', difficulty: 'Advanced',
    title: 'AI Agent with Tool Use',
    shortDesc: 'Build an autonomous AI agent that can browse the web, run code, and complete multi-step tasks.',
    overview: 'Design a LangChain or LangGraph-based AI agent equipped with tools: web search, Python code execution, file read/write, and API calls. The agent must autonomously plan and execute multi-step tasks given a natural language goal.',
    objectives: ['Build agent with 4+ tools', 'Implement ReAct reasoning loop', 'Handle tool failures gracefully', 'Build task history and memory', 'Demo 5 complex multi-step tasks'],
    deliverables: ['Working agent with all tools', 'Demo video of 5 tasks', 'GitHub repo', 'Architecture write-up'],
    techStack: ['Python', 'LangGraph', 'OpenAI API', 'Tavily Search', 'FastAPI', 'Docker'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Agent architecture, tool definitions, ReAct loop' },
      { phase: 'Week 3', tasks: 'Web search, code execution tools' },
      { phase: 'Week 4', tasks: 'Memory, task history, error handling' },
      { phase: 'Week 5', tasks: 'Complex task demos, edge case handling' },
      { phase: 'Week 6', tasks: 'UI, documentation, submission' },
    ],
  },
  {
    id: 'ai-5', domain: 'Artificial Intelligence', difficulty: 'Advanced',
    title: 'Fine-Tune an LLM on Domain-Specific Data',
    shortDesc: 'Fine-tune Mistral or LLaMA on a domain dataset using LoRA and deploy for inference.',
    overview: 'Use parameter-efficient fine-tuning (LoRA/QLoRA) to adapt an open-source LLM on a domain-specific dataset. Evaluate against the base model and deploy with an inference API.',
    objectives: ['Prepare and format training dataset (1000+ examples)', 'Fine-tune with LoRA on Google Colab', 'Evaluate with ROUGE and human eval', 'Merge weights and push to HuggingFace Hub', 'Deploy inference API'],
    deliverables: ['Fine-tuned model on HuggingFace Hub', 'Evaluation comparison report', 'Inference API', 'Training notebook'],
    techStack: ['Python', 'HuggingFace', 'PEFT/LoRA', 'trl', 'Weights & Biases', 'FastAPI'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Dataset preparation, formatting, train/eval split' },
      { phase: 'Week 3', tasks: 'LoRA fine-tuning, loss monitoring, W&B logging' },
      { phase: 'Week 4', tasks: 'Evaluation vs base model, ROUGE scores' },
      { phase: 'Week 5', tasks: 'Weight merging, HuggingFace Hub upload, inference API' },
      { phase: 'Week 6', tasks: 'Documentation, submission' },
    ],
  },

  // ── DATA ANALYTICS ────────────────────────────────────────────────────────────
  {
    id: 'da-1', domain: 'Data Analytics', difficulty: 'Beginner',
    title: 'Sales Performance Dashboard in Power BI',
    shortDesc: 'Build an interactive sales dashboard with KPIs, drill-downs, and regional breakdowns.',
    overview: 'Using a real retail dataset, build a comprehensive Power BI dashboard that tracks revenue, profit margins, top products, and regional performance with interactive slicers and drill-through pages.',
    objectives: ['Clean data in Power Query', 'Build 5+ calculated measures in DAX', 'Create interactive slicers and filters', 'Build drill-through detail pages', 'Export and document dashboard'],
    deliverables: ['Power BI file (.pbix)', 'PDF export of key views', 'DAX measure documentation', 'Video walkthrough'],
    techStack: ['Power BI', 'DAX', 'Power Query', 'Excel', 'SQL'],
    timeline: [
      { phase: 'Week 1', tasks: 'Data loading, Power Query cleaning, data model setup' },
      { phase: 'Week 2', tasks: 'KPI cards, bar/line charts, revenue measures in DAX' },
      { phase: 'Week 3', tasks: 'Regional map, drill-through, slicers, bookmarks' },
      { phase: 'Week 4', tasks: 'Polish, export, documentation, submission' },
    ],
  },
  {
    id: 'da-2', domain: 'Data Analytics', difficulty: 'Beginner',
    title: 'SQL Analytics Project — E-Commerce Database',
    shortDesc: 'Write 20+ analytical SQL queries to extract business insights from an e-commerce database.',
    overview: 'Work with a normalized e-commerce database and write complex SQL queries to answer real business questions. Topics include window functions, CTEs, subqueries, cohort analysis, and funnel metrics.',
    objectives: ['Write queries using window functions', 'Build customer cohort retention analysis', 'Calculate RFM scores for customers', 'Identify top/bottom performing products', 'Build order funnel analysis'],
    deliverables: ['SQL file with 20+ queries', 'Results documented in Excel', 'Business insights report', 'GitHub repo'],
    techStack: ['PostgreSQL', 'Excel', 'DBeaver', 'SQL'],
    timeline: [
      { phase: 'Week 1', tasks: 'Database setup, basic queries, joins, aggregations' },
      { phase: 'Week 2', tasks: 'Window functions, rankings, running totals' },
      { phase: 'Week 3', tasks: 'Cohort analysis, RFM scoring, funnel metrics' },
      { phase: 'Week 4', tasks: 'Insights report, documentation, submission' },
    ],
  },
  {
    id: 'da-3', domain: 'Data Analytics', difficulty: 'Intermediate',
    title: 'Marketing Attribution Analytics',
    shortDesc: 'Analyze multi-touch marketing attribution and present channel ROI insights.',
    overview: 'Given a dataset of customer journeys across marketing channels, implement and compare attribution models: first-touch, last-touch, linear, and Markov chain. Present which channels actually drive conversions.',
    objectives: ['Implement 4 attribution models', 'Compare channel performance across models', 'Calculate true channel ROI', 'Build visualization dashboard', 'Present recommendations to reduce CAC'],
    deliverables: ['Python notebook with all models', 'Channel ROI comparison chart', 'Business recommendations report', 'GitHub repo'],
    techStack: ['Python', 'Pandas', 'Matplotlib', 'Plotly', 'Jupyter'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Data prep, first/last/linear attribution implementation' },
      { phase: 'Week 3', tasks: 'Markov chain attribution, channel transition matrix' },
      { phase: 'Week 4-5', tasks: 'ROI calculation, visualizations' },
      { phase: 'Week 6', tasks: 'Report writing, recommendations, submission' },
    ],
  },
  {
    id: 'da-4', domain: 'Data Analytics', difficulty: 'Intermediate',
    title: 'Google Analytics + BigQuery Pipeline',
    shortDesc: 'Build an automated analytics pipeline from GA4 to BigQuery with a Looker Studio dashboard.',
    overview: 'Set up a real data pipeline: export GA4 events to BigQuery, transform with SQL, and build a Looker Studio dashboard tracking user acquisition, engagement, and conversion metrics.',
    objectives: ['Connect GA4 to BigQuery', 'Write transformation SQL queries', 'Build automated scheduled queries', 'Create Looker Studio dashboard', 'Set up email alerts for KPI drops'],
    deliverables: ['Working BigQuery dataset', 'Looker Studio dashboard link', 'SQL transformation scripts', 'Documentation'],
    techStack: ['GA4', 'BigQuery', 'SQL', 'Looker Studio', 'Google Cloud'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'GA4 setup, BigQuery export, table exploration' },
      { phase: 'Week 3', tasks: 'SQL transformations, session and funnel metrics' },
      { phase: 'Week 4-5', tasks: 'Looker Studio dashboard, KPI tracking' },
      { phase: 'Week 6', tasks: 'Alerts, documentation, submission' },
    ],
  },
  {
    id: 'da-5', domain: 'Data Analytics', difficulty: 'Advanced',
    title: 'A/B Testing Framework and Analysis',
    shortDesc: 'Design, simulate, and analyze an A/B test with statistical rigor and business impact reporting.',
    overview: 'Build a complete A/B testing system: design the experiment, calculate sample size, run the test, perform statistical analysis, check for novelty effects, and present results as a business decision report.',
    objectives: ['Calculate statistically valid sample sizes', 'Implement multiple statistical tests', 'Check for segmentation effects', 'Build automated analysis script', 'Present go/no-go business recommendation'],
    deliverables: ['Jupyter notebook with full analysis', 'Automated A/B test Python script', 'Business recommendation report', 'GitHub repo'],
    techStack: ['Python', 'SciPy', 'Pandas', 'Plotly', 'Jupyter'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Experiment design, power analysis, sample size calculation' },
      { phase: 'Week 3', tasks: 'Statistical testing, p-values, confidence intervals' },
      { phase: 'Week 4', tasks: 'Segmentation, novelty effects, guardrail metrics' },
      { phase: 'Week 5', tasks: 'Automation script, visualization' },
      { phase: 'Week 6', tasks: 'Business report, submission' },
    ],
  },

  // ── BUSINESS ANALYTICS ────────────────────────────────────────────────────────
  {
    id: 'ba-1', domain: 'Business Analytics', difficulty: 'Beginner',
    title: 'Business Case Study — Market Entry Strategy',
    shortDesc: 'Analyze a real company\'s potential market entry using strategic frameworks and financial projections.',
    overview: 'Choose a real company and a new market they could enter. Use structured frameworks (Porter\'s Five Forces, SWOT, TAM/SAM/SOM, PESTLE) to build a comprehensive market entry analysis with Year 1-3 financial projections.',
    objectives: ['Apply 4 strategic frameworks', 'Research and size the target market', 'Build Year 1-3 financial projection', 'Identify top 3 risks and mitigations', 'Present go/no-go recommendation'],
    deliverables: ['10-slide PowerPoint presentation', 'Excel financial model', 'Written analysis report', 'Sources bibliography'],
    techStack: ['Excel', 'PowerPoint', 'Canva', 'Statista', 'Crunchbase'],
    timeline: [
      { phase: 'Week 1', tasks: 'Company and market selection, secondary research' },
      { phase: 'Week 2', tasks: 'Framework analysis: Porter\'s, SWOT, PESTLE' },
      { phase: 'Week 3', tasks: 'Market sizing, financial projections' },
      { phase: 'Week 4', tasks: 'Presentation, recommendation, submission' },
    ],
  },
  {
    id: 'ba-2', domain: 'Business Analytics', difficulty: 'Beginner',
    title: 'KPI Dashboard for a Startup',
    shortDesc: 'Design and build a KPI tracking dashboard for a SaaS startup with real metrics.',
    overview: 'Simulate a SaaS startup\'s operational data and build a comprehensive KPI dashboard tracking MRR, churn rate, CAC, LTV, NPS, and operational metrics using Excel or Google Sheets.',
    objectives: ['Define 15+ relevant KPIs', 'Build automated Excel dashboard', 'Add conditional formatting for alerts', 'Write KPI definitions and targets', 'Present monthly review report'],
    deliverables: ['Excel dashboard file', 'KPI definitions document', 'Monthly review presentation', 'GitHub/Drive link'],
    techStack: ['Excel', 'Google Sheets', 'PowerPoint', 'Canva'],
    timeline: [
      { phase: 'Week 1', tasks: 'KPI selection, data simulation, Excel structure' },
      { phase: 'Week 2', tasks: 'Formulas, charts, conditional formatting' },
      { phase: 'Week 3', tasks: 'Dashboard polish, interactivity, scenario modeling' },
      { phase: 'Week 4', tasks: 'Monthly review report, submission' },
    ],
  },
  {
    id: 'ba-3', domain: 'Business Analytics', difficulty: 'Intermediate',
    title: 'Customer Segmentation and Growth Strategy',
    shortDesc: 'Segment customers using RFM and clustering, then build targeted growth strategies per segment.',
    overview: 'Using transaction data, apply RFM scoring and K-Means clustering to identify distinct customer segments. For each segment, build a data-backed growth playbook with retention and upsell strategies.',
    objectives: ['RFM scoring and interpretation', 'K-Means clustering with optimal K', 'Build growth playbook per segment', 'Model revenue impact of strategies', 'Present to mock executive team'],
    deliverables: ['Python/Excel analysis', 'Segment profiles document', 'Growth strategy playbook', '10-slide executive presentation'],
    techStack: ['Python', 'Scikit-learn', 'Excel', 'PowerPoint', 'Pandas'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Data prep, RFM scoring, segment profiling' },
      { phase: 'Week 3', tasks: 'K-Means clustering, segment validation' },
      { phase: 'Week 4-5', tasks: 'Growth strategies, revenue modeling' },
      { phase: 'Week 6', tasks: 'Executive presentation, submission' },
    ],
  },
  {
    id: 'ba-4', domain: 'Business Analytics', difficulty: 'Intermediate',
    title: 'Operational Efficiency Audit',
    shortDesc: 'Conduct a full operational audit of a business process and identify cost reduction opportunities.',
    overview: 'Select a business process and conduct a structured operational efficiency audit using process mapping, bottleneck analysis, and benchmarking to identify where time and money are lost.',
    objectives: ['Map current state process (as-is)', 'Identify and quantify bottlenecks', 'Benchmark against industry standards', 'Design optimized process (to-be)', 'Build ROI model for improvements'],
    deliverables: ['Process maps (as-is and to-be)', 'Bottleneck analysis report', 'ROI model in Excel', 'Implementation roadmap'],
    techStack: ['Excel', 'Lucidchart/Draw.io', 'PowerPoint'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Process selection, as-is mapping, data collection' },
      { phase: 'Week 3', tasks: 'Bottleneck analysis, benchmarking' },
      { phase: 'Week 4', tasks: 'To-be process design, ROI modeling' },
      { phase: 'Week 5-6', tasks: 'Report, roadmap, presentation, submission' },
    ],
  },
  {
    id: 'ba-5', domain: 'Business Analytics', difficulty: 'Advanced',
    title: 'Pricing Strategy Optimization',
    shortDesc: 'Build a dynamic pricing model using elasticity analysis and competitive benchmarking.',
    overview: 'Analyze pricing strategy using price elasticity of demand, competitive pricing data, and customer willingness-to-pay research. Build a dynamic pricing model recommending optimal price points to maximize revenue.',
    objectives: ['Calculate price elasticity of demand', 'Collect and analyze competitor pricing', 'Build willingness-to-pay survey analysis', 'Develop dynamic pricing model', 'Model 3 pricing scenarios with P&L impact'],
    deliverables: ['Elasticity analysis', 'Pricing model in Excel', 'Scenario P&L model', '12-slide strategy presentation'],
    techStack: ['Excel', 'Python', 'PowerPoint', 'Survey tools'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Elasticity analysis, competitive research' },
      { phase: 'Week 3', tasks: 'WTP analysis, segmentation pricing' },
      { phase: 'Week 4', tasks: 'Dynamic pricing model, scenario analysis' },
      { phase: 'Week 5-6', tasks: 'P&L modeling, strategy presentation, submission' },
    ],
  },

  // ── FINANCIAL ANALYST ─────────────────────────────────────────────────────────
  {
    id: 'fa-1', domain: 'Financial Analyst', difficulty: 'Beginner',
    title: 'Company Financial Statement Analysis',
    shortDesc: 'Perform a complete 3-statement analysis and ratio analysis on a listed company.',
    overview: 'Choose a NSE/BSE listed company and analyze their last 3 years of annual reports. Calculate and interpret 20+ financial ratios across liquidity, profitability, efficiency, and solvency dimensions.',
    objectives: ['Restructure 3-statement financials in Excel', 'Calculate 20+ financial ratios', 'Trend analysis over 3 years', 'Compare to industry benchmark', 'Write investment thesis (buy/hold/sell)'],
    deliverables: ['Excel model with 3 statements', 'Ratio analysis sheet', '5-slide investment thesis', 'Written analysis report'],
    techStack: ['Excel', 'NSE/BSE annual reports', 'Screener.in', 'PowerPoint'],
    timeline: [
      { phase: 'Week 1', tasks: 'Company selection, data collection, Excel model setup' },
      { phase: 'Week 2', tasks: 'Ratio calculations, trend analysis' },
      { phase: 'Week 3', tasks: 'Peer comparison, industry benchmarking' },
      { phase: 'Week 4', tasks: 'Investment thesis, report, submission' },
    ],
  },
  {
    id: 'fa-2', domain: 'Financial Analyst', difficulty: 'Beginner',
    title: 'Personal Finance Dashboard and Budget Model',
    shortDesc: 'Build an interactive personal finance tracker with budget vs actuals and 5-year projections.',
    overview: 'Design a comprehensive personal finance Excel model covering income tracking, expense categorization, budget vs actual variance, savings goals, and 5-year wealth projection with scenario modeling.',
    objectives: ['Build income and expense tracker', 'Budget vs actual variance analysis', 'Savings goals progress tracker', '5-year wealth projection model', 'Scenario modeling (optimistic/base/pessimistic)'],
    deliverables: ['Excel dashboard file', 'User guide documentation', 'Demo video walkthrough', 'GitHub/Drive link'],
    techStack: ['Excel', 'Google Sheets'],
    timeline: [
      { phase: 'Week 1', tasks: 'Income/expense tracker, categorization, Excel structure' },
      { phase: 'Week 2', tasks: 'Budget model, variance formulas, charts' },
      { phase: 'Week 3', tasks: 'Savings goals, wealth projection model' },
      { phase: 'Week 4', tasks: 'Scenario modeling, polish, submission' },
    ],
  },
  {
    id: 'fa-3', domain: 'Financial Analyst', difficulty: 'Intermediate',
    title: 'DCF Valuation Model',
    shortDesc: 'Build a full DCF valuation model with scenario analysis and sensitivity tables.',
    overview: 'Build a professional Discounted Cash Flow valuation model for a listed Indian company. Include revenue projections, EBITDA build-up, free cash flow calculation, WACC estimation, terminal value, and sensitivity analysis.',
    objectives: ['Project revenue using growth drivers', 'Build EBITDA and FCF model', 'Calculate WACC (cost of equity + debt)', 'Sensitivity table on WACC and growth rate', 'Compare to current market price'],
    deliverables: ['Full DCF Excel model', 'Sensitivity analysis tables', '8-slide investment pitch', 'Written assumptions document'],
    techStack: ['Excel', 'Screener.in', 'Moneycontrol', 'PowerPoint'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Company research, revenue projections, cost structure' },
      { phase: 'Week 3', tasks: 'FCF build, WACC calculation, terminal value' },
      { phase: 'Week 4', tasks: 'Sensitivity tables, scenario analysis' },
      { phase: 'Week 5-6', tasks: 'Investment pitch, documentation, submission' },
    ],
  },
  {
    id: 'fa-4', domain: 'Financial Analyst', difficulty: 'Intermediate',
    title: 'MIS Reporting Automation',
    shortDesc: 'Build an automated MIS reporting system in Excel with macros that generates monthly reports.',
    overview: 'Design a Management Information System (MIS) reporting tool that pulls data from multiple sheets, runs automated calculations, and generates formatted monthly reports with one macro button click.',
    objectives: ['Design multi-sheet data architecture', 'Write VBA macros for automation', 'Build P&L, balance sheet, cash flow reports', 'Add charts and executive summary', 'One-click report generation'],
    deliverables: ['Excel file with VBA macros', 'User manual', 'Demo video', 'Sample monthly reports'],
    techStack: ['Excel', 'VBA', 'PowerPoint'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Data architecture, manual report structure' },
      { phase: 'Week 3', tasks: 'VBA macro writing, automation logic' },
      { phase: 'Week 4-5', tasks: 'Report templates, charts, executive summary' },
      { phase: 'Week 6', tasks: 'Testing, user manual, submission' },
    ],
  },
  {
    id: 'fa-5', domain: 'Financial Analyst', difficulty: 'Advanced',
    title: 'Investment Portfolio Optimization',
    shortDesc: 'Build a Markowitz portfolio optimization model and backtest against Nifty 50 benchmark.',
    overview: 'Using real NSE stock data, implement Modern Portfolio Theory to construct the efficient frontier and find optimal portfolios. Backtest your portfolio against Nifty 50 with risk-adjusted return attribution analysis.',
    objectives: ['Collect and clean 5 years of stock data', 'Build covariance matrix and efficient frontier', 'Find minimum variance and max Sharpe portfolios', 'Backtest vs Nifty 50', 'Attribution analysis for returns'],
    deliverables: ['Python analysis notebook', 'Backtest results report', 'Efficient frontier visualization', 'Investment memo'],
    techStack: ['Python', 'yfinance', 'NumPy', 'SciPy', 'Matplotlib', 'Pandas'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Data collection, returns calculation, covariance matrix' },
      { phase: 'Week 3', tasks: 'Efficient frontier, optimization algorithms' },
      { phase: 'Week 4', tasks: 'Portfolio selection, backtesting engine' },
      { phase: 'Week 5', tasks: 'Attribution analysis, benchmark comparison' },
      { phase: 'Week 6', tasks: 'Investment memo, documentation, submission' },
    ],
  },

  // ── HR INTERN ─────────────────────────────────────────────────────────────────
  {
    id: 'hr-1', domain: 'HR Intern', difficulty: 'Beginner',
    title: 'Recruitment Pipeline Tracker',
    shortDesc: 'Build an end-to-end recruitment tracking dashboard to manage candidates across hiring stages.',
    overview: 'Design a complete Applicant Tracking System simulation using Excel or Google Sheets. Track candidates from sourcing through offer with automated stage updates, recruiter notes, and hiring funnel visualization.',
    objectives: ['Build candidate database with all fields', 'Tracking across 6 hiring stages', 'Automated funnel charts', 'Offer rate and time-to-hire metrics', 'Email template library'],
    deliverables: ['Excel/Sheets ATS tracker', 'Hiring funnel dashboard', 'Email template library (10 templates)', 'Process documentation'],
    techStack: ['Excel', 'Google Sheets', 'Google Forms', 'Canva'],
    timeline: [
      { phase: 'Week 1', tasks: 'ATS structure, candidate fields, stage definitions' },
      { phase: 'Week 2', tasks: 'Formulas, status tracking, funnel charts' },
      { phase: 'Week 3', tasks: 'Metrics (time-to-hire, offer rate), email templates' },
      { phase: 'Week 4', tasks: 'Documentation, process guide, submission' },
    ],
  },
  {
    id: 'hr-2', domain: 'HR Intern', difficulty: 'Beginner',
    title: 'Employee Onboarding Program Design',
    shortDesc: 'Design a complete 30-60-90 day onboarding program with materials, checklists, and survey tools.',
    overview: 'Create a comprehensive employee onboarding program from scratch including a 30-60-90 day plan, onboarding checklist, welcome kit, buddy program structure, and 30-day feedback survey.',
    objectives: ['Design 30-60-90 day plan', 'Build onboarding checklist (50+ items)', 'Create welcome kit content', 'Design buddy program', 'Build 30-day feedback survey'],
    deliverables: ['Onboarding program document', '30-60-90 day plan template', 'Checklist Excel file', 'Google Form survey', 'Welcome kit design'],
    techStack: ['Google Docs', 'Excel', 'Canva', 'Google Forms', 'PowerPoint'],
    timeline: [
      { phase: 'Week 1', tasks: 'Research best practices, define objectives, 30-60-90 plan' },
      { phase: 'Week 2', tasks: 'Detailed checklist, first-week schedule, buddy program' },
      { phase: 'Week 3', tasks: 'Welcome kit content, survey design' },
      { phase: 'Week 4', tasks: 'Documentation polish, submission' },
    ],
  },
  {
    id: 'hr-3', domain: 'HR Intern', difficulty: 'Intermediate',
    title: 'HR Analytics — Attrition Prediction',
    shortDesc: 'Analyze employee attrition patterns and build a predictive model to flag at-risk employees.',
    overview: 'Using the IBM HR Analytics dataset, perform deep attrition analysis and build a machine learning model to predict which employees are at risk of leaving. Present actionable retention strategies.',
    objectives: ['Analyze attrition by department, role, tenure', 'Identify top attrition drivers', 'Build prediction model (80%+ accuracy)', 'Design retention intervention strategies', 'Present to mock HR leadership'],
    deliverables: ['Python analysis notebook', 'Prediction model', 'Retention strategy report', 'HR leadership presentation (10 slides)'],
    techStack: ['Python', 'Pandas', 'Scikit-learn', 'Matplotlib', 'PowerPoint'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'EDA, attrition by segment, driver analysis' },
      { phase: 'Week 3', tasks: 'Model building, feature importance, validation' },
      { phase: 'Week 4-5', tasks: 'Retention strategies, intervention design' },
      { phase: 'Week 6', tasks: 'HR presentation, documentation, submission' },
    ],
  },
  {
    id: 'hr-4', domain: 'HR Intern', difficulty: 'Intermediate',
    title: 'Performance Management System Design',
    shortDesc: 'Design a complete OKR-based performance management system with review templates.',
    overview: 'Build a comprehensive performance management framework for a 50-person startup including OKR templates, quarterly review process, 360-degree feedback structure, PIP template, and promotion criteria.',
    objectives: ['Design OKR framework with examples', 'Build quarterly review templates', '360-degree feedback survey', 'Calibration process guidelines', 'PIP and promotion criteria documents'],
    deliverables: ['Complete PM system document', 'OKR template library', 'Review form templates', 'Calibration guide', 'Implementation roadmap'],
    techStack: ['Google Docs', 'Google Forms', 'Excel', 'Notion', 'PowerPoint'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'OKR framework, examples, scoring rubric' },
      { phase: 'Week 3', tasks: 'Review templates, 360 survey design' },
      { phase: 'Week 4', tasks: 'Calibration process, PIP template, promotion criteria' },
      { phase: 'Week 5-6', tasks: 'Documentation, implementation guide, submission' },
    ],
  },
  {
    id: 'hr-5', domain: 'HR Intern', difficulty: 'Advanced',
    title: 'Compensation Benchmarking and Salary Bands',
    shortDesc: 'Build a compensation benchmarking study and design salary bands using market data.',
    overview: 'Conduct a comprehensive compensation benchmarking exercise for a 100-person company. Benchmark 15+ roles, analyze internal pay equity, and design salary bands with clear level definitions and a compensation philosophy.',
    objectives: ['Benchmark 15+ roles using 3+ sources', 'Analyze internal pay equity', 'Design salary bands (P25/P50/P75)', 'Write compensation philosophy', 'Model budget impact of adjustments'],
    deliverables: ['Benchmarking Excel model', 'Salary band document', 'Pay equity analysis report', 'Compensation philosophy doc', 'Budget impact model'],
    techStack: ['Excel', 'Google Sheets', 'PowerPoint', 'AmbitionBox', 'Glassdoor'],
    timeline: [
      { phase: 'Week 1-2', tasks: 'Role mapping, market data collection, benchmarking' },
      { phase: 'Week 3', tasks: 'Pay equity analysis, internal comparisons' },
      { phase: 'Week 4', tasks: 'Salary band design, level definitions' },
      { phase: 'Week 5', tasks: 'Compensation philosophy, budget modeling' },
      { phase: 'Week 6', tasks: 'Final report, presentation, submission' },
    ],
  },
]

const KAGGLE_DOMAINS = ['Data Science', 'Data Analytics', 'Business Analytics', 'Financial Analyst']

export default function ProjectsPage() {
  const router = useRouter()

  const [internDomain, setInternDomain]         = useState<string>('')
  const [selectedProject, setSelectedProject]   = useState<string>('')
  const [expandedProject, setExpandedProject]   = useState<string>('')
  const [selectedTimeline, setSelectedTimeline] = useState<number>(0)
  const [submitting, setSubmitting]             = useState(false)
  const [error, setError]                       = useState('')

  useEffect(() => {
    fetch('/api/intern/dashboard', { credentials: 'include' })
      .then(r => r.json())
      .then(d => { if (d?.intern?.domain) setInternDomain(d.intern.domain) })
      .catch(() => {})
  }, [])

  const domains = Array.from(new Set(ALL_PROJECTS.map(p => p.domain))).filter(domain =>
    internDomain
      ? domain.toLowerCase().includes(internDomain.toLowerCase()) ||
        internDomain.toLowerCase().includes(domain.split(' ')[0].toLowerCase())
      : true
  )

  const diffColor: Record<string, { bg: string; text: string }> = {
    Beginner:     { bg: 'rgba(16,185,129,0.15)',  text: '#10b981' },
    Intermediate: { bg: 'rgba(245,158,11,0.15)',  text: '#f59e0b' },
    Advanced:     { bg: 'rgba(239,68,68,0.15)',   text: '#ef4444' },
  }

  const handleSubmit = async () => {
    if (!selectedProject || !selectedTimeline) {
      setError('Please select a project and a timeline.')
      return
    }
    setSubmitting(true)
    setError('')

    const project = ALL_PROJECTS.find(p => p.id === selectedProject)

    const res = await fetch('/api/intern/choose-project', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      body: JSON.stringify({
        projectId:     selectedProject,
        projectTitle:  project?.title,
        projectDomain: project?.domain,
        timelineDays:  selectedTimeline,
      }),
    })

    const data = await res.json()

    if (!res.ok) {
      setError(data.error || 'Something went wrong')
      setSubmitting(false)
      return
    }

    router.push('/portal/dashboard')
  }

  return (
    <div style={s.page}>

      {/* Navbar */}
      <nav style={s.nav}>
        <div style={s.navLeft}>
          <img src="/logos/logo.png" alt="Nextgraad" style={{ width: 32, height: 32, objectFit: 'contain' }} />
          <div>
            <div style={s.navBrand}>NEXTGRAAD</div>
            <div style={s.navSub}>Internship Portal</div>
          </div>
        </div>
        <button onClick={() => router.push('/portal/dashboard')} style={s.backBtn}>← Dashboard</button>
      </nav>

      <div style={s.body}>

        <div style={s.pageHeader}>
          <h1 style={s.pageTitle}>Choose Your Project</h1>
          <p style={s.pageSub}>Select one project and a timeline. This cannot be changed after confirming.</p>
          {internDomain && (
            <div style={s.yourDomainBadge}>
              📂 Showing projects for: <strong>{internDomain}</strong>
            </div>
          )}
        </div>

        {domains.map(domain => {
          const domainProjects = ALL_PROJECTS.filter(p => p.domain === domain)
          return (
            <div key={domain} style={{ marginBottom: 40 }}>

              <div style={s.domainHeader}>
                <span style={s.domainTitle}>{domain}</span>
                <span style={s.projectCount}>{domainProjects.length} projects</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                {domainProjects.map(project => {
                  const isSelected = selectedProject === project.id
                  const isExpanded = expandedProject === project.id
                  const diff       = diffColor[project.difficulty]

                  return (
                    <div
                      key={project.id}
                      style={{
                        ...s.projectCard,
                        borderColor: isSelected ? '#6d28d9' : 'rgba(255,255,255,0.07)',
                        background:  isSelected ? 'rgba(109,40,217,0.10)' : 'rgba(255,255,255,0.02)',
                      }}
                    >
                      {/* Card header */}
                      <div
                        style={s.cardHeader}
                        onClick={() => {
                          setSelectedProject(project.id)
                          setExpandedProject(isExpanded ? '' : project.id)
                        }}
                      >
                        <div style={s.cardLeft}>
                          <div style={{
                            ...s.selectCircle,
                            borderColor: isSelected ? '#6d28d9' : 'rgba(255,255,255,0.2)',
                            background:  isSelected ? '#6d28d9' : 'transparent',
                          }}>
                            {isSelected && <div style={s.selectDot} />}
                          </div>
                          <div>
                            <div style={s.projectName}>{project.title}</div>
                            <div style={s.projectShortDesc}>{project.shortDesc}</div>
                          </div>
                        </div>
                        <div style={s.cardRight}>
                          <span style={{ ...s.diffTag, background: diff.bg, color: diff.text }}>
                            {project.difficulty}
                          </span>
                          <span style={s.expandIcon}>{isExpanded ? '▲' : '▼'}</span>
                        </div>
                      </div>

                      {/* Expanded content */}
                      {isExpanded && (
                        <div style={s.expandedContent}>

                          <div style={s.techRow}>
                            {project.techStack.map(t => (
                              <span key={t} style={s.techPill}>{t}</span>
                            ))}
                          </div>

                          {/* Overview + Kaggle note */}
                          <div style={s.section}>
                            <div style={s.sectionTitle}>📋 Project Overview</div>
                            <p style={s.sectionText}>{project.overview}</p>
                            {KAGGLE_DOMAINS.includes(project.domain) && (
                              <div style={s.kaggleNote}>
                                📊 <strong>Dataset Resource:</strong> Source your dataset from{' '}
                                
                                  href={`https://www.kaggle.com/search?q=${encodeURIComponent(project.title.split(' ').slice(0, 3).join(' '))}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  style={s.kaggleLink}
                                >
                                  Kaggle Datasets ↗
                                </a>
                                {' '}— search <em>"{project.title.split(' ').slice(0, 3).join(' ')}"</em> to find relevant data for this project.
                              </div>
                            )}
                          </div>

                          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                            <div style={s.section}>
                              <div style={s.sectionTitle}>🎯 Objectives</div>
                              {project.objectives.map((o, i) => (
                                <div key={i} style={s.listItem}><span style={s.bullet}>→</span> {o}</div>
                              ))}
                            </div>
                            <div style={s.section}>
                              <div style={s.sectionTitle}>📦 Deliverables</div>
                              {project.deliverables.map((d, i) => (
                                <div key={i} style={s.listItem}><span style={s.bullet}>✓</span> {d}</div>
                              ))}
                            </div>
                          </div>

                          <div style={s.section}>
                            <div style={s.sectionTitle}>📅 Project Timeline</div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                              {project.timeline.map((t, i) => (
                                <div key={i} style={s.timelineItem}>
                                  <span style={s.timelinePhase}>{t.phase}</span>
                                  <span style={s.timelineTasks}>{t.tasks}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Timeline selection */}
                          {isSelected && (
                            <div style={s.timelineSection}>
                              <div style={s.sectionTitle}>⏱ Select Your Timeline</div>
                              <div style={s.timelineGrid}>
                                {[
                                  { days: 30, label: '1 Month',  desc: 'Focused sprint' },
                                  { days: 60, label: '2 Months', desc: 'Balanced pace' },
                                  { days: 90, label: '3 Months', desc: 'Deep dive' },
                                ].map(({ days, label, desc }) => {
                                  const tActive = selectedTimeline === days
                                  return (
                                    <div
                                      key={days}
                                      onClick={e => { e.stopPropagation(); setSelectedTimeline(days) }}
                                      style={{
                                        ...s.timelineCard,
                                        borderColor: tActive ? '#6d28d9' : 'rgba(255,255,255,0.1)',
                                        background:  tActive ? 'rgba(109,40,217,0.15)' : 'rgba(255,255,255,0.03)',
                                      }}
                                    >
                                      <div style={s.timelineDays}>{days}</div>
                                      <div style={s.timelineLabel}>{label}</div>
                                      <div style={s.timelineDesc}>{desc}</div>
                                    </div>
                                  )
                                })}
                              </div>
                            </div>
                          )}

                          <button
                            onClick={e => { e.stopPropagation(); setSelectedProject(project.id) }}
                            style={{
                              ...s.selectBtn,
                              background: isSelected
                                ? 'linear-gradient(135deg,#6d28d9,#4f46e5)'
                                : 'rgba(109,40,217,0.2)',
                              border: isSelected ? 'none' : '1px solid rgba(109,40,217,0.4)',
                            }}
                          >
                            {isSelected ? '✅ Selected' : 'Select This Project'}
                          </button>
                        </div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}

        {error && <div style={s.errorBox}>⚠️ {error}</div>}

        {/* Sticky confirm */}
        <div style={s.confirmSection}>
          {selectedProject && selectedTimeline ? (
            <div style={s.selectionSummary}>
              <span>📌 <strong>{ALL_PROJECTS.find(p => p.id === selectedProject)?.title}</strong></span>
              <span>⏱ <strong>{selectedTimeline} days</strong></span>
            </div>
          ) : null}

          <button
            onClick={handleSubmit}
            disabled={submitting || !selectedProject || !selectedTimeline}
            style={{
              ...s.confirmBtn,
              opacity: (submitting || !selectedProject || !selectedTimeline) ? 0.45 : 1,
              cursor:  (submitting || !selectedProject || !selectedTimeline) ? 'not-allowed' : 'pointer',
            }}
          >
            {submitting ? '⏳ Confirming...' : '✅ Confirm Selection'}
          </button>
          <p style={s.warningText}>⚠️ Once confirmed, your project and timeline cannot be changed.</p>
        </div>

      </div>
    </div>
  )
}

const s: Record<string, React.CSSProperties> = {
  page: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    background: '#0a0f1e',
    fontFamily: "'Inter', Arial, sans-serif",
    color: '#e2e8f0',
    overflow: 'hidden',
  },
  nav: {
    flexShrink: 0,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 40px',
    background: 'rgba(255,255,255,0.02)',
    borderBottom: '1px solid rgba(255,255,255,0.06)',
    backdropFilter: 'blur(12px)',
    zIndex: 100,
  },
  body: {
    flex: 1,
    overflowY: 'auto',
    padding: '32px 24px 80px',
    maxWidth: 860,
    margin: '0 auto',
    width: '100%',
    boxSizing: 'border-box',
  },
  navLeft:  { display: 'flex', alignItems: 'center', gap: 12 },
  navBrand: { fontSize: 15, fontWeight: 800, color: '#fff', letterSpacing: 2 },
  navSub:   { fontSize: 11, color: '#64748b' },
  backBtn: {
    background: 'rgba(255,255,255,0.05)',
    color: '#94a3b8',
    border: '1px solid rgba(255,255,255,0.08)',
    padding: '8px 16px',
    borderRadius: 8,
    fontSize: 13,
    cursor: 'pointer',
  },
  pageHeader:  { marginBottom: 32 },
  pageTitle:   { margin: 0, fontSize: 26, fontWeight: 800, color: '#f1f5f9' },
  pageSub:     { margin: '8px 0 12px', color: '#64748b', fontSize: 14, lineHeight: 1.6 },
  yourDomainBadge: {
    display: 'inline-block',
    background: 'rgba(109,40,217,0.12)',
    border: '1px solid rgba(109,40,217,0.3)',
    color: '#a78bfa',
    padding: '6px 14px',
    borderRadius: 20,
    fontSize: 13,
  },
  domainHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 16px',
    borderRadius: 10,
    border: '1px solid rgba(109,40,217,0.3)',
    background: 'rgba(109,40,217,0.08)',
    marginBottom: 10,
  },
  domainTitle:   { fontSize: 14, fontWeight: 700, color: '#f1f5f9' },
  projectCount:  { fontSize: 12, color: '#475569' },
  projectCard: {
    border: '1px solid',
    borderRadius: 10,
    overflow: 'hidden',
    transition: 'border-color 0.2s',
  },
  cardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '14px 16px',
    cursor: 'pointer',
    gap: 12,
  },
  cardLeft:  { display: 'flex', alignItems: 'flex-start', gap: 12, flex: 1 },
  cardRight: { display: 'flex', alignItems: 'center', gap: 10, flexShrink: 0 },
  selectCircle: {
    width: 18, height: 18,
    borderRadius: '50%',
    border: '2px solid',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    flexShrink: 0, marginTop: 2,
  },
  selectDot:        { width: 8, height: 8, background: 'white', borderRadius: '50%' },
  projectName:      { fontSize: 14, fontWeight: 700, color: '#f1f5f9', marginBottom: 3 },
  projectShortDesc: { fontSize: 12, color: '#64748b', lineHeight: 1.5 },
  diffTag: {
    padding: '3px 10px', borderRadius: 20,
    fontSize: 11, fontWeight: 700, whiteSpace: 'nowrap' as const,
  },
  expandIcon:      { color: '#475569', fontSize: 11 },
  expandedContent: { padding: '0 16px 20px', borderTop: '1px solid rgba(255,255,255,0.05)' },
  techRow:         { display: 'flex', flexWrap: 'wrap' as const, gap: 6, padding: '14px 0 10px' },
  techPill: {
    background: 'rgba(255,255,255,0.06)',
    color: '#94a3b8',
    padding: '3px 10px',
    borderRadius: 20,
    fontSize: 11,
    border: '1px solid rgba(255,255,255,0.08)',
  },
  section:      { marginBottom: 16 },
  sectionTitle: { fontSize: 12, fontWeight: 700, color: '#a78bfa', marginBottom: 8, letterSpacing: 0.5 },
  sectionText:  { fontSize: 13, color: '#94a3b8', lineHeight: 1.7, margin: 0 },
  listItem:     { fontSize: 12, color: '#94a3b8', lineHeight: 1.8, display: 'flex', gap: 6 },
  bullet:       { color: '#6d28d9', flexShrink: 0 },
  kaggleNote: {
    marginTop: 10,
    padding: '8px 12px',
    background: 'rgba(20,184,166,0.08)',
    border: '1px solid rgba(20,184,166,0.2)',
    borderRadius: 8,
    fontSize: 12,
    color: '#5eead4',
    lineHeight: 1.6,
  },
  kaggleLink: {
    color: '#2dd4bf',
    fontWeight: 600,
    textDecoration: 'underline',
  },
  timelineItem: {
    display: 'flex', gap: 12, alignItems: 'flex-start',
    background: 'rgba(255,255,255,0.03)',
    borderRadius: 6, padding: '8px 12px',
  },
  timelinePhase: { fontSize: 11, fontWeight: 700, color: '#6d28d9', minWidth: 60, flexShrink: 0 },
  timelineTasks: { fontSize: 12, color: '#94a3b8', lineHeight: 1.5 },
  timelineSection: { marginTop: 16, paddingTop: 16, borderTop: '1px solid rgba(255,255,255,0.06)' },
  timelineGrid: { display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 10, marginTop: 10 },
  timelineCard: {
    border: '1px solid', borderRadius: 10, padding: '14px 12px',
    textAlign: 'center' as const, cursor: 'pointer', transition: 'all 0.2s',
  },
  timelineDays:  { fontSize: 28, fontWeight: 800, color: '#f1f5f9', lineHeight: 1 },
  timelineLabel: { fontSize: 12, fontWeight: 600, color: '#a78bfa', margin: '4px 0 2px' },
  timelineDesc:  { fontSize: 11, color: '#475569' },
  selectBtn: {
    width: '100%', padding: '11px', marginTop: 16,
    color: 'white', border: 'none', borderRadius: 10,
    fontSize: 14, fontWeight: 600, cursor: 'pointer',
  },
  confirmSection: {
    position: 'sticky' as const,
    bottom: 0,
    background: 'rgba(10,15,30,0.95)',
    backdropFilter: 'blur(12px)',
    padding: '16px 0 8px',
    borderTop: '1px solid rgba(255,255,255,0.06)',
    marginTop: 24,
  },
  selectionSummary: {
    display: 'flex', gap: 20, marginBottom: 12,
    fontSize: 13, color: '#94a3b8',
  },
  confirmBtn: {
    width: '100%', padding: '14px',
    background: 'linear-gradient(135deg,#6d28d9,#4f46e5)',
    color: 'white', border: 'none', borderRadius: 12,
    fontSize: 15, fontWeight: 700,
  },
  warningText: { textAlign: 'center' as const, color: '#334155', fontSize: 12, marginTop: 8 },
  errorBox: {
    background: 'rgba(239,68,68,0.08)',
    border: '1px solid rgba(239,68,68,0.3)',
    borderRadius: 10, padding: '12px 16px',
    color: '#ef4444', fontSize: 13, marginBottom: 16,
  },
}