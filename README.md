# Graded Project on Orchestration and Scaling
Objective: To automate the pipeline using ECR, EKS and Jenkins and deploy the app 

GitHub Links: https://github.com/SamDonald-A/StreamingApp 

---

# Step 1: Git and local code setup
 •	Fork the repo

<img width="982" height="481" alt="image" src="https://github.com/user-attachments/assets/52d1e3f2-86a9-4c18-9890-3de4ecc87ad5" />

•	Clone the repo in your local

<img width="976" height="457" alt="image" src="https://github.com/user-attachments/assets/486bb891-2a70-4ddc-882e-02204e6dea75" />

•	Create the  . env in each service and in frontend and run the app for testing

<img width="976" height="490" alt="image" src="https://github.com/user-attachments/assets/378c422b-5a5a-4959-a92f-53758b051a2b" />

<img width="935" height="474" alt="image" src="https://github.com/user-attachments/assets/6f8bd8a6-556f-4d3e-8ecf-5487d0d1e440" />
<img width="935" height="479" alt="image" src="https://github.com/user-attachments/assets/4454eb62-eb2e-4a7f-942e-18ad3c9886e2" />
<img width="976" height="494" alt="image" src="https://github.com/user-attachments/assets/9aa2b406-9f76-4798-abb5-60ab32202686" />
<img width="976" height="176" alt="image" src="https://github.com/user-attachments/assets/99492dcd-26fd-4c9a-9de4-d157fd3a4cad" />

# Step 2: Containerization - Docker setup

•	Create Docker file in each service and in frontend

<img width="976" height="506" alt="image" src="https://github.com/user-attachments/assets/f2fb7ea6-3bb2-4675-b5a2-17762ec59fe9" />

•	Build image and run locally to check once again with containers using docker-compose.yaml

<img width="976" height="459" alt="image" src="https://github.com/user-attachments/assets/c2879c52-eff6-474d-b39d-5579b02b1d40" />

<img width="976" height="270" alt="image" src="https://github.com/user-attachments/assets/0f1f4e9b-e2ed-49a5-897a-a6a34f0867f9" />

•	Make sure your docker and minikube are running

<img width="976" height="398" alt="image" src="https://github.com/user-attachments/assets/d9548a45-27a2-424c-8d77-7533c6ff1280" />

<img width="974" height="335" alt="image" src="https://github.com/user-attachments/assets/ac1a9742-0048-4028-82b1-70bfabdb9e6b" />

•	Now app is running via docker container

<img width="976" height="334" alt="image" src="https://github.com/user-attachments/assets/6501740f-b0f2-4b3f-9f8b-f6e5bf5d439b" />

<img width="976" height="338" alt="image" src="https://github.com/user-attachments/assets/794c2114-102f-4007-a4b9-965a0043d8fe" />

# Step 3: Container orchestration – Kubernetes and Helm Setup

•	Create k8s manifest files to run pods then trying with helm

<img width="976" height="453" alt="image" src="https://github.com/user-attachments/assets/f9f7c623-35b9-4245-a698-0efe027af79d" />

<img width="974" height="342" alt="image" src="https://github.com/user-attachments/assets/bbce6cfe-3344-4aa0-8f48-9a91517fea9c" />

•	Port forwarding for the local K8s deployment

<img width="976" height="124" alt="image" src="https://github.com/user-attachments/assets/51bac3a9-e17d-4eb7-9122-57c9d5d50aaa" />

<img width="976" height="497" alt="image" src="https://github.com/user-attachments/assets/44aa9552-7f95-4c81-82e0-a24a47db6b96" />

•	Create EKS cluster and set context

<img width="974" height="363" alt="image" src="https://github.com/user-attachments/assets/409691f1-b00f-4aca-83a0-76f2707e62ae" />

<img width="976" height="184" alt="image" src="https://github.com/user-attachments/assets/3e838f9b-60a7-4e55-9bca-294435be9deb" />

•	Setting-up the context to EKS

<img width="976" height="427" alt="image" src="https://github.com/user-attachments/assets/7409a073-a431-477b-84a8-e66e3b7e8439" />

# Step 4: Setup ECR

•	Login to ECR

<img width="974" height="103" alt="image" src="https://github.com/user-attachments/assets/4125ad35-9c70-4241-a0e2-deb6261a918e" />

•	Create repository and tag local images to the respected repo

<img width="976" height="466" alt="image" src="https://github.com/user-attachments/assets/7bc4434a-654c-4500-83e1-5cc18151b52f" />

<img width="976" height="370" alt="image" src="https://github.com/user-attachments/assets/403803e9-78b7-4c10-a941-da13c6afe5e0" />

•	Then push the images to ECR

<img width="975" height="354" alt="image" src="https://github.com/user-attachments/assets/530529da-cca7-435a-aec5-a23b7df2b0f2" />

•	Replace image names with reference ID from AWS ECR image Repository

<img width="976" height="463" alt="image" src="https://github.com/user-attachments/assets/d8a9c46d-d56d-4e69-9487-8daa455a24f6" />

•	Deploy code via helm template – Create helm files and helm upgrade your project

<img width="938" height="458" alt="image" src="https://github.com/user-attachments/assets/084fab96-5596-4a04-b9dd-0d6ee805a924" />

•	Chek ingress created with load balancer

<img width="938" height="158" alt="image" src="https://github.com/user-attachments/assets/87e43e56-2775-47ea-b67f-dc3b8fd22710" />

•	Use the Loadbalancer and open the app in the browser

<img width="938" height="481" alt="image" src="https://github.com/user-attachments/assets/960f482b-0758-45df-b2f5-c6883dac214c" />
<img width="976" height="494" alt="image" src="https://github.com/user-attachments/assets/010b5d60-06d4-46b0-9d51-978841297ee6" />
<img width="976" height="501" alt="image" src="https://github.com/user-attachments/assets/89cdd9f8-e287-4326-a1ee-e6e5f9dc4bc8" />

# Step 5: Jenkinsfile and Jenkin setup

•	Create Jenkins file

<img width="976" height="432" alt="image" src="https://github.com/user-attachments/assets/c005469d-d42d-4c0d-b241-af8265046919" />

•	And Push the complete code to the Git 

<img width="976" height="445" alt="image" src="https://github.com/user-attachments/assets/845364c6-cd4e-4d41-981d-aa1370131a2e" />

•	Create Jenkins server in the EC2 and open it in the browser via IP address

<img width="976" height="467" alt="image" src="https://github.com/user-attachments/assets/baa503bd-cc2a-40b8-aabd-6e4ad0b7440b" />

<img width="975" height="494" alt="image" src="https://github.com/user-attachments/assets/2d312d53-ab74-48d6-b6fb-88bcae8464cd" />

<img width="975" height="499" alt="image" src="https://github.com/user-attachments/assets/c7a2b913-3454-4eb6-89ad-795b73249b62" />

<img width="975" height="504" alt="image" src="https://github.com/user-attachments/assets/3d3346b1-2c69-47c5-af2a-41bf1bba6044" />

<img width="975" height="501" alt="image" src="https://github.com/user-attachments/assets/3b7416ed-1724-4be9-a94f-ab3d0ea447ec" />

<img width="975" height="503" alt="image" src="https://github.com/user-attachments/assets/46452a6d-ace8-461f-80a4-e8bb08b1b3dd" />

•	Click create New Item on the top left

<img width="976" height="498" alt="image" src="https://github.com/user-attachments/assets/db3a16b2-c1c3-45bd-98de-e19891ad6946" />

•	Give name & Select Pipeling

<img width="976" height="501" alt="image" src="https://github.com/user-attachments/assets/7821e194-2b08-4b2e-878e-0a7811920cdf" />


•	Selcte GitHub Hook trigger for GITScm polling (We need to setup webhook in the git repo)

<img width="976" height="420" alt="image" src="https://github.com/user-attachments/assets/9f370d80-26ba-4cf4-a919-b73b08ff382f" />
<img width="976" height="496" alt="image" src="https://github.com/user-attachments/assets/165a5324-df78-40a8-86a5-892862839b39" />

•	Provide that Git repo link here and select your branch
<img width="974" height="410" alt="image" src="https://github.com/user-attachments/assets/07f86f2d-a6e6-4c6f-ad41-f1f551fc7c0e" />
<img width="973" height="235" alt="image" src="https://github.com/user-attachments/assets/17bf807a-a3b8-4737-9cfa-228a37775cec" />

•	Setup Webhook in Github Repository – Goto settings of your repo and click webhook

<img width="974" height="240" alt="image" src="https://github.com/user-attachments/assets/b6ace159-bba8-4d35-917c-c2d0fe56b17f" />

•	Click add New then add Payload and select Json
<img width="976" height="247" alt="image" src="https://github.com/user-attachments/assets/75cd8033-de9d-40ec-b1d3-bb393f13d07d" />
<img width="974" height="260" alt="image" src="https://github.com/user-attachments/assets/ae756699-5e6f-4dde-b38c-0472aba48bae" />
<img width="973" height="177" alt="image" src="https://github.com/user-attachments/assets/07890022-a228-42dc-bb40-a567e41fc848" />

•	Now push the code to check the webhook trigger

<img width="974" height="288" alt="image" src="https://github.com/user-attachments/assets/e584f467-76bf-4c15-9b9b-b0669168f499" />

<img width="976" height="343" alt="image" src="https://github.com/user-attachments/assets/20ff795e-4a2f-4a2b-b854-65f01263ee90" />

•	And we see the Webhook triggered the pipeline

<img width="976" height="343" alt="image" src="https://github.com/user-attachments/assets/9d69bf7f-a924-4d66-b04a-aef7cddbcc4a" />

•	Study the log error

<img width="976" height="489" alt="image" src="https://github.com/user-attachments/assets/76b9cddf-1fbb-4234-ad06-147b1bb98066" />

# Step 6: Check Jenkins Host server requirements for EKS to run the app

•	Make sure all the services are installed

•	Docker
•	Helm
•	Aws CLI
•	Kubectl 
•	At least t3.midium in EC2 for running the pipeline
•	At least 20gb storage for the npm and other installation process on the machine
•	EKS IAM Role permissions
•	Jenkins
•	Jenkins credentials
•	Jenkins plugins
•	Email Notification setup

<img width="976" height="290" alt="image" src="https://github.com/user-attachments/assets/9b722227-826d-4cc3-abb2-e3c8d94b94be" />

•	Add all required plugins in Jenkins

<img width="976" height="287" alt="image" src="https://github.com/user-attachments/assets/252184d5-1aad-4b68-9f6c-aa6066cde77c" />

•	Add credentials

<img width="976" height="471" alt="image" src="https://github.com/user-attachments/assets/ca360ea0-4169-4c6b-892b-c7bf8e587696" />

<img width="976" height="399" alt="image" src="https://github.com/user-attachments/assets/55bb3656-923f-49c6-9a90-7715b12ad202" />

<img width="976" height="494" alt="image" src="https://github.com/user-attachments/assets/6ed62700-ef76-4eb8-aa80-ce50a4381bf0" />

•	Add your AWS Secret and ID

<img width="976" height="494" alt="image" src="https://github.com/user-attachments/assets/040cb3fb-72b8-4c74-8c0c-bfbf6bd4d556" />

•	Set up Email notification – Got to system and find email notification and setup then test the email sent as a notification

<img width="976" height="501" alt="image" src="https://github.com/user-attachments/assets/84dd00e8-bfb3-4e77-9e28-9656b7f2844b" />

<img width="976" height="494" alt="image" src="https://github.com/user-attachments/assets/75ff81dc-a5d4-4b76-804b-5fbc5187dfed" />

<img width="976" height="488" alt="image" src="https://github.com/user-attachments/assets/40c7ab51-66bb-4c6f-b7d0-26a8576fee50" />

<img width="976" height="205" alt="image" src="https://github.com/user-attachments/assets/3cbcee9e-7fc0-4928-b05d-39c79311d467" />

•	Then Change the Jenkins pipeline flow according to your requierments and push the code to the repository

<img width="976" height="344" alt="image" src="https://github.com/user-attachments/assets/d20049c3-f5de-43c6-a9f5-8d05c57a2e20" />

•	Loadbalancer also created

<img width="975" height="275" alt="image" src="https://github.com/user-attachments/assets/2eb182f8-8048-40f9-a1fc-0dca3728300d" />

•	Deployment Success and Notification also sent to the mail on success and check the loadbalancet on the browser

<img width="975" height="339" alt="image" src="https://github.com/user-attachments/assets/923cbf54-dc25-4126-a8b2-0cbcb449fcc0" />

<img width="975" height="370" alt="image" src="https://github.com/user-attachments/assets/f09b029e-889a-4dc6-a15f-44f9beadd8ce" />

•	All Pods and services are running

<img width="975" height="493" alt="image" src="https://github.com/user-attachments/assets/3177ffad-39ec-4271-be8c-5494c5407d30" />

<img width="975" height="503" alt="image" src="https://github.com/user-attachments/assets/8474df58-14d2-460f-89cf-734e3541b97b" />

•	Cross Check after the pipeline end

<img width="975" height="474" alt="image" src="https://github.com/user-attachments/assets/c44e8e3f-2a2a-44b4-a335-a4da29e0d7ea" />

•	Check the Load balancer on the browser – Create user and see if its works

<img width="975" height="497" alt="image" src="https://github.com/user-attachments/assets/9d88540d-fba7-4b36-a922-35c83cb2a549" />

<img width="975" height="501" alt="image" src="https://github.com/user-attachments/assets/b7df782a-6831-492d-9e5b-2756313814cf" />

<img width="975" height="496" alt="image" src="https://github.com/user-attachments/assets/f897a50d-e593-4cee-b96c-dd237117f423" />

<img width="975" height="496" alt="image" src="https://github.com/user-attachments/assets/83d2706b-5c03-42f2-917a-9962d6382d63" />

User Created successfully which means the micro services are able to communicate between them

Documentation by: Sam Donald A
Email: samdonaldand@gmail.com
GitHub: https://github.com/SamDonald-A
Website: www.samdonald.in


# StreamingApp

Stream premium video content, host live watch parties, and manage your catalogue with a modern microservice architecture. The platform now ships with a production-ready admin portal, real-time chat, S3-backed adaptive streaming, and a redesigned cinematic frontend experience.

## Architecture

| Service | Port | Description |
| --- | --- | --- |
| `authService` | 3001 | User authentication, registration, JWT issuance |
| `streamingService` | 3002 | Video catalogue, S3 playback endpoints, public APIs |
| `adminService` | 3003 | Dedicated admin microservice for asset management and uploads |
| `chatService` | 3004 | Websocket + REST chat for live watch parties |
| `frontend` | 3000 | React SPA with revamped UI and integrated chat |
| `mongo` | 27017 | Shared MongoDB instance |

All backend services share common database models and utilities through `backend/common`.

## Environment Configuration

Create an `.env` for each service (or export variables before running). All services accept the standard AWS credentials for S3 access.

### Auth Service (`backend/authService/.env`)
```ini
PORT=3001
MONGO_URI=mongodb://localhost:27017/streamingapp
JWT_SECRET=changeme
CLIENT_URLS=http://localhost:3000
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1
AWS_S3_BUCKET=
```

### Streaming Service (`backend/streamingService/.env`)
```ini
PORT=3002
MONGO_URI=mongodb://localhost:27017/streamingapp
JWT_SECRET=changeme
CLIENT_URLS=http://localhost:3000
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1
AWS_S3_BUCKET=
AWS_CDN_URL=
STREAMING_PUBLIC_URL=http://localhost:3002
```

### Admin Service (`backend/adminService/.env`)
```ini
PORT=3003
MONGO_URI=mongodb://localhost:27017/streamingapp
JWT_SECRET=changeme
CLIENT_URLS=http://localhost:3000
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_REGION=us-east-1
AWS_S3_BUCKET=
```

### Chat Service (`backend/chatService/.env`)
```ini
PORT=3004
MONGO_URI=mongodb://localhost:27017/streamingapp
JWT_SECRET=changeme
CLIENT_URLS=http://localhost:3000
```

### Frontend build variables (`frontend/.env` or Docker build args)
```ini
REACT_APP_AUTH_API_URL=http://localhost:3001/api
REACT_APP_STREAMING_API_URL=http://localhost:3002/api
REACT_APP_STREAMING_PUBLIC_URL=http://localhost:3002
REACT_APP_ADMIN_API_URL=http://localhost:3003/api
REACT_APP_CHAT_API_URL=http://localhost:3004/api
REACT_APP_CHAT_SOCKET_URL=http://localhost:3004
```

## Running with Docker Compose

1. Populate the environment variables above (or rely on the defaults baked into `docker-compose.yml`).
2. Build and start the stack:
   ```bash
   docker-compose up --build
   ```
3. Navigate to `http://localhost:3000` for the web app.

The compose file provisions MongoDB plus all four Node.js microservices. S3 credentials are optional for local testing—you can still browse seeded metadata, but streaming requires valid S3 objects.

## Local Development

Install dependencies for each service:

```bash
# auth service
cd backend/authService && npm install

# streaming service
cd ../streamingService && npm install

# admin service
cd ../adminService && npm install

# chat service
cd ../chatService && npm install

# frontend
cd ../../frontend && npm install
```

Run the services (in separate terminals) after starting MongoDB:

```bash
cd backend/authService && npm run dev
cd backend/streamingService && npm run dev
cd backend/adminService && npm run dev
cd backend/chatService && npm run dev
cd frontend && npm start
```

## Feature Highlights

- **S3-backed adaptive streaming** with secure signed uploads for admins.
- **Dedicated admin microservice** for video ingestion, metadata management, and featured curation.
- **Real-time chat** overlay in the player (Socket.IO + persistent message history).
- **Modern React experience** featuring cinematic hero sections, dynamic carousels, and responsive design.
- **Role-aware access control** across frontend routes and backend microservices.

## Testing

Automated tests are not yet included. Recommended smoke checks:

1. Register and log in through the web UI.
2. Upload a small video + thumbnail via the admin dashboard (requires valid S3 credentials).
3. Confirm playback from the browse page and verify that chat messages broadcast between multiple browser tabs.

## License

MIT © StreamFlix Team
