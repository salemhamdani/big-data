# Big Data Project:  Airbnb Prices in European Cities

- This is a Big Data school project where we used technologies to process the Airbnb prices in European cities.

- It was made by [Salem Hamdani](https://github.com/salemhamdani), [Nader Ouerdiane](https://github.com/vicyyn) and [Ismail Charfi](https://github.com/IsmailCharfi).

## Data

- The date is from [Kaggle](https://www.kaggle.com/datasets/thedevastator/airbnb-prices-in-european-cities)
- We're more interested in grouping airbnb prices and show them according to city.

## Screenshots
![proj1](https://github.com/salemhamdani/big-data/assets/78962943/7f54e4a8-ad95-422f-83fe-3e285acc3581)
![proj2](https://github.com/salemhamdani/big-data/assets/78962943/f1dbb083-e2f7-4779-84b7-45c927b2e573)

## Architecture

### 1. Data Ingestion:

- Data is first ingested into the system from CSV files from Kaggle.

### 2. Data storage:

- Data is stored in (HDFS), which provides distributed storage and processing of large datasets

### 3. Batch processing:

- Batch processing is performed using Hadoop map reduce to process the daily batch of Airbnb data stored in HDFS and calculate metrics such as prices, cities, room types...

### 4. Real-time processing:

- Real-time processing of incoming data is performed using Apache Spark Streaming and Apache Kafka.

### 5. Dashboarding and reporting:

- Finally, data is presented to end-users through interactive dashboards (web application).

- By using the stream, the app will subscribe to that upcoming data and choose the best time to announce the property to rent and secure the best profit
