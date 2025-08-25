import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

export default function Portfolio() {
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
        "This project is a comprehensive end-to-end data engineering solution deployed in Azure. It begins by setting up a storage account within an Azure subscription and loading CSV data into the container using Python. Connectivity between Databricks and Azure Data Lake Gen 2 is established using secret key, client key, and tenant ID, facilitating data extraction into DataFrames for processing with PySpark. After data cleaning, the processed data is stored back into Azure Data Lake Gen 2. In Azure Synapse Analytics workspace, a SQL database is created, and external tables are utilized to access data from Azure Data Lake Gen 2 for seamless querying within Synapse Analytics. Using T-SQL, an external fact table is constructed as per the data model in \"Dimensional Model.drawio\", incorporating data from external dimension tables. The processed data is then loaded into Power BI for visualization, where a dashboard is created to provide insightful analysis using measures and columns derived from the data. This project demonstrates a robust data engineering pipeline leveraging Azure services and tools, offering a structured approach from data ingestion to visualization. The GitHub repository provides detailed documentation and code implementation.",
      link: "https://github.com/Dhiraj0107/Olist_ecommerce",
      tech: ["Azure", "Azure Data Lake Gen2", "Databricks", "PySpark", "Synapse", "T-SQL", "Power BI", "Python"]
    },
    {
      title: "Flight Cancellation Status End-to-end Deep Learning Project",
      details:
        "This project aims to predict whether a flight will be canceled or not using deep learning techniques. It utilizes an imbalanced dataset, which has been addressed through the Synthetic Minority Over-sampling Technique (SMOTE) for oversampling. The model is deployed as a Docker container and can be deployed to AWS ECR and EC2 for scalable deployment (I have established a CI/CD pipeline using GitHub Actions for this).",
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 text-gray-900">
      {/* Hero Section */}
      <section className="text-center py-16">
        <motion.h1 initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }} className="text-5xl font-bold mb-4">
          Dhiraj's Portfolio
        </motion.h1>
        <p className="text-lg max-w-3xl mx-auto">
          Showcasing projects in Data Engineering, Machine Learning, NLP, and Business Intelligence.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 pb-20 max-w-7xl mx-auto">
        {projects.map((project, index) => (
          <motion.div key={index} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
            <Card className="rounded-2xl shadow-md bg-white hover:shadow-lg transition">
              <CardContent className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-sm text-gray-700 mb-4 line-clamp-4">{project.details}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700 border">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-3">
                  <Button variant="outline" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />View Code
                    </a>
                  </Button>
                  <Button variant="secondary" onClick={() => setSelectedProject(project)}>Learn More</Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* Modal for full description */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-2xl w-full p-6 shadow-xl relative">
            <button className="absolute top-3 right-4 text-gray-600 hover:text-black text-xl" onClick={() => setSelectedProject(null)} aria-label="Close">
              ×
            </button>
            <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
            <p className="mb-6 whitespace-pre-wrap text-gray-800 text-base leading-relaxed">{selectedProject.details}</p>
            <div className="flex gap-3">
              <Button asChild variant="outline">
                <a href={selectedProject.link} target="_blank" rel="noreferrer">Open on GitHub</a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
