# 🔄 Adaptive Queue Reorganizer

A practical JavaScript project that demonstrates intelligent task queue restructuring using advanced linked list operations. The system reorganizes workflow sequences by moving high-priority tasks from the end of the queue into optimized positions while maintaining the original data structure.

---

## 📌 Project Overview

In many real-world systems, tasks are stored in sequential pipelines where processing order matters. Sometimes urgent or important tasks appear at the end of the queue and need to be repositioned without recreating the entire structure.

**Adaptive Queue Reorganizer** solves this problem by efficiently rearranging linked data flows using pointer manipulation techniques.

The project focuses on:

- Linked list management
- In-place data restructuring
- Efficient memory usage
- Dynamic workflow optimization

---

## 🌍 Real-World Conceptual Scenario

Imagine a cloud-based workflow management system where thousands of tasks are waiting for processing.

Example:

```
Task A → Task B → Task C → Task D → Task E
```

The system identifies that recently added critical tasks should receive attention earlier:

```
Task A → Task E → Task B → Task D → Task C
```

Instead of creating a new queue, the system modifies the existing structure directly to save memory and improve performance.

---

## 🧠 Core Concept

The project uses a linked list reorganization strategy:

1. Find the middle point of the workflow.
2. Reverse the second section.
3. Merge both sections alternately.

This allows the queue to be rearranged without modifying task data.

---

## ⚙️ How The System Works

### Original Workflow

```
Task 1 → Task 2 → Task 3 → Task 4 → Task 5
```

### Step 1: Split the Queue

Using slow and fast pointers:

```
First Half:
Task 1 → Task 2 → Task 3

Second Half:
Task 4 → Task 5
```

---

### Step 2: Reverse Priority Section

```
Task 5 → Task 4
```

---

### Step 3: Merge Both Sections

Final optimized workflow:

```
Task 1 → Task 5 → Task 2 → Task 4 → Task 3
```

---

# 🏗️ Algorithm & Data Structure

## Data Structure

**Singly Linked List**

Each workflow task contains:

```javascript
{
    value: taskInformation,
    next: nextTask
}
```

---

## Algorithm Used

### 1. Two Pointer Technique

Used to find the middle of the linked list.

- Slow pointer moves one step.
- Fast pointer moves two steps.

### 2. Linked List Reversal

The second half is reversed by changing node connections.

### 3. In-place Merge

Both halves are combined without creating additional lists.

---

# 🚀 Step-by-Step Logic

1. Check if the queue contains fewer than two tasks.
2. Locate the middle task.
3. Separate the linked list into two parts.
4. Reverse the second part.
5. Merge both parts alternatively.
6. Return the optimized workflow order.

---

# ✨ Key Features

- ✅ Efficient linked list restructuring
- ✅ O(1) extra memory usage
- ✅ No modification of task values
- ✅ Clean pointer-based implementation
- ✅ Scalable for large workflows
- ✅ Demonstrates real-world algorithm design

---

# 📖 Example Use Case

## Input Workflow

```
Upload File → Validate Data → Generate Report → Send Email
```

## After Reorganization

```
Upload File → Send Email → Validate Data → Generate Report
```

The system brings the final action closer to execution priority while keeping the workflow connected.

---

# 📥 Example Input / Output

### Input

```text
A → B → C → D → E
```

### Output

```text
A → E → B → D → C
```

---

# ⏱️ Complexity Analysis

| Operation | Complexity |
|---|---|
| Finding Middle Node | O(n) |
| Reversing List | O(n) |
| Merging Lists | O(n) |

### Overall Complexity

**Time Complexity:** O(n)

**Space Complexity:** O(1)

---

# 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| JavaScript | Core implementation |
| Node.js | Runtime environment |
| Linked List | Data organization |
| Pointer Manipulation | Memory-efficient restructuring |

---

# 📂 Project Structure

```
Adaptive-Queue-Reorganizer/
│
├── src/
│   ├── linkedList.js
│   └── queueReorganizer.js
│
├── examples/
│   └── demo.js
│
├── README.md
└── package.json
```

---

# ▶️ How To Run

### Clone Repository

```bash
git clone https://github.com/mirhamzarahman/Adaptive-Queue-Reorganizer.git
```

### Navigate Into Project

```bash
cd Adaptive-Queue-Reorganizer
```

### Run Example

```bash
node examples/demo.js
```

---

# 📚 Learning Outcomes

By building this project, I learned:

- How linked lists work internally
- How to manipulate node connections safely
- How two-pointer algorithms solve complex problems
- How to optimize memory usage
- How algorithm concepts can become practical software solutions

---

# 🔮 Future Improvements

Possible enhancements:

- Add a visual linked list animation
- Create a browser-based workflow simulator
- Support priority-based task ranking
- Add API integration for real task systems
- Store workflows using persistent databases

---

# 📄 License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with proper attribution.
