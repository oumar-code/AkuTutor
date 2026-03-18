# Aku Tutor

## Overview

Aku Tutor is a microservice in the Aku platform ecosystem. It provides intelligent tutoring, personalized learning, and educational automation for users and other services.

## Features

- REST API for tutoring and learning tasks
- Scalable Node.js backend

## Getting Started

### Prerequisites

- Node.js 20+
- Docker (optional)

### Development

```bash
git clone <repo-url>
cd AkuTutor
npm install
npm run dev
```

### Docker

```bash
docker build -t aku-tutor:latest .
docker run -p 8080:8080 aku-tutor:latest
```

### Testing

```bash
npm test
```

## Deployment

See `.github/workflows/ci.yml` for CI/CD pipeline.

## License

MIT
