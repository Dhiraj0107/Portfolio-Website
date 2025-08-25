import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Q-and-A-bot-using-llama3",
      details:
        "This project aims to develop a Q&A bot designed to answer questions based on the article (P19-1496.pdf) that details creating a model capable of providing question-answering capabilities for genuine tweets used by journalists to write news articles. The project uses vector embeddings with Ollama embedding to store data in a Chroma vector store. The data is stored in chunks with some overlap between them. The model used to create the bot is Llama3 by Meta. Subsequently, RAG (Retrieval-Augmented Generation) is implemented using a prompt template that guides the model to answer questions accurately based on the provided context. Finally, the model and the prompt used to develop the chain, along with retrieval to interact with the vector store, generate the response.",
      link: "https://github.com/Dhiraj0107/Q-and-A-bot-using-llama3",
      tech: ["Llama3", "RAG", "Ollama", "Chroma", "Vector Store"]
    },
    {
      title: "Olist e-commerce",
      details:
        "This project is a comprehensive end-to-end data engineering solution deployed in Azure. It begins by setting up a storage account within an Azure subscription and loading CSV data into the container using Python. Connectivity between Databricks and Azure Data Lake Gen 2 is established using secret key, client key, and tenant ID, facilitating data extraction into DataFrames for processing with PySpark. After data cleaning, the processed data is stored back into Azure Data Lake Gen 2. In Azure Synapse Analytics workspace, a SQL database is created, and external tables are utilized to access data from Azure Data Lake Gen 2 for seamless querying within Synapse Analytics. Using T-SQL, an external fact table is constructed as per the data model in \"Dimensional Model.drawio\", incorporating data from external dimension tables. The processed data is then loaded into Power BI for visualization, where a dashboard is created to provide insightful analysis using measures and columns derived from the data. The GitHub repository provides detailed documentation and code implementation.",
      link: "https://github.com/Dhiraj0107/Olist_ecommerce",
      tech: ["Azure", "Azure Data Lake Gen2", "Databricks", "PySpark", "Synapse", "T-SQL", "Power BI", "Python"]
    },
    {
      title: "Flight Cancellation Status End-to-end Deep Learning Project",
      details:
        "This project aims to predict whether a flight will be canceled or not using deep learning techniques. It utilizes an imbalanced dataset, which has been addressed through the Synthetic Minority Over-sampling Technique (SMOTE) for oversampling. The model is deployed as a Docker container using CI/CD pipeline in GitHub Actions and can be deployed to AWS ECR and EC2 for scalable deployment.",
      link: "https://github.com/Dhiraj0107/MLProject",
      tech: ["Deep Learning", "SMOTE", "Docker", "AWS ECR", "AWS EC2", "GitHub Actions", "CI/CD"]
    },
    {
      title: "Tokyo Olympics",
      details:
        "This comprehensive end-to-end data engineering project revolves around the Tokyo Olympics dataset, showcasing a data pipeline executed on the AWS cloud. Beginning with loading data into Amazon S3 using boto3, the process includes Glue Crawler and Athena integration for automated table definitions and querying. Further stages involve data extraction to the local system for cleaning with Pandas, storage in Redshift for the creation of dimension and fact tables according to the below model using SQL, subsequent extraction back to S3, and loading data to the local system using AWS CLI. The project also encompasses the consolidation of data segregated into different files for each table into a single file on the Windows command prompt. The finale involves a dynamic Power BI dashboard, employing DAX functions for visualization.",
      link: "https://github.com/Dhiraj0107/tokyo-olympics",
      tech: ["AWS S3", "boto3", "Glue Crawler", "Athena", "Pandas", "Redshift", "SQL", "AWS CLI", "Power BI", "DAX"]
    },
    {
      title: "Email Spam Classification using NLP",
      details:
        "Implemented lemmatization for word reduction and TF-IDF for text vectorization. Performed Hyperparameter Tuning and trained a Random Forest model, achieving a classification accuracy of 96% for spam detection. Achieved impressive accuracy rates, ensuring a more secure email experience.",
      link: "https://github.com/Dhiraj0107/NLP-Project",
      tech: ["NLP", "Lemmatization", "TF-IDF", "Random Forest", "Sklearn", "Python"]
    },
    {
      title: "Employee Attrition Analysis Dashboard",
      details:
        "This project focuses on creating an interactive and data-driven Power BI dashboard to analyze and determine the causes of employee attrition within the company. By leveraging various data visualization techniques, the dashboard aims to provide valuable insights for HR decision-makers to enhance employee retention strategies.",
      link: "https://github.com/Dhiraj0107/Employee-Attrition",
      tech: ["Power BI", "Data Visualization", "HR Analytics"]
    }
  ];

  return (
    <div className="page gradient-bg">
      {/* Hero */}
      <section className="hero">
        <h1 className="title">Dhiraj&apos;s Portfolio</h1>
        <p className="subtitle">
          Showcasing projects in Data Engineering, Generative AI, Machine Learning, NLP, and Business Intelligence.
        </p>
      </section>

      {/* Grid */}
      <section className="grid">
        {projects.map((project, i) => (
          <div className="card fade-up" style={{ animationDelay: `${i * 60}ms` }} key={project.title}>
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-desc line-clamp-4">{project.details}</p>

              <div className="badges">
                {project.tech.map((t) => (
                  <span className="badge" key={t}>{t}</span>
                ))}
              </div>

              <div className="actions">
                <a className="btn btn-outline" href={project.link} target="_blank" rel="noopener noreferrer">
                  {/* inline GitHub icon */}
                  <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" style={{ marginRight: 6 }}>
                    <path fill="currentColor"
                      d="M8 .2a8 8 0 0 0-2.53 15.6c.4.08.55-.18.55-.39v-1.34c-2.24.49-2.71-1.08-2.71-1.08-.36-.93-.89-1.18-.89-1.18-.73-.5.06-.49.06-.49.8.06 1.22.83 1.22.83.72 1.23 1.88.88 2.34.67.07-.53.28-.88.5-1.09-1.79-.2-3.67-.9-3.67-4a3.1 3.1 0 0 1 .83-2.16c-.08-.2-.36-1.01.08-2.1 0 0 .68-.22 2.22.83a7.6 7.6 0 0 1 4.04 0c1.54-1.05 2.22-.83 2.22-.83.44 1.09.16 1.9.08 2.1.52.57.83 1.3.83 2.16 0 3.11-1.89 3.79-3.69 3.99.29.25.54.74.54 1.49v2.21c0 .21.15.47.55.39A8 8 0 0 0 8 .2Z" />
                  </svg>
                  View Code
                </a>
                <button className="btn btn-secondary" onClick={() => setSelectedProject(project)}>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </section>

      {/* Modal */}
      {selectedProject && (
        <div className="modal" role="dialog" aria-modal="true" onClick={() => setSelectedProject(null)}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" aria-label="Close" onClick={() => setSelectedProject(null)}>×</button>
            <h3 className="modal-title">{selectedProject.title}</h3>
            <p className="modal-desc">{selectedProject.details}</p>
            <div className="actions">
              <a className="btn btn-outline" href={selectedProject.link} target="_blank" rel="noopener noreferrer">
                Open on GitHub
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
