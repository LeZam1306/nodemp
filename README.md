# Nodemp 🚀

**Nodemp** is a lightweight CLI to quickly scaffold an Express.js project and generate endpoints.  
It helps developers bootstrap projects and endpoints without repetitive boilerplate.

---

## 🛠️ Features

- ✨ Create a new Express project in seconds
- 🚀 Generate API endpoints with predefined structure
- 🪶 Lightweight and easy to use

---

## ⚡ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/LeZam1306/Nodemp.git
cd Nodemp
```

### 2. Install dependencies

```bash
npm install
```

### 3. Make the CLI executable globally

```bash
npm link
```

> **Note:** After `npm link`, you can run `nodemp` from anywhere in your terminal.

---

## 💻 Usage

### Create a new project

```bash
nodemp c:project <project-name>
```

**Parameters:**
- `project-name`: Name of the new Express project

**Example:**
```bash
nodemp c:project my-app
```

### Create a new endpoint

```bash
nodemp c:endpoint <endpoint-name> <path>
```

**Parameters:**
- `endpoint-name`: Name of the endpoint file/module
- `path`: Route path for the endpoint

**Example:**
```bash
nodemp c:endpoint Users users
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.
