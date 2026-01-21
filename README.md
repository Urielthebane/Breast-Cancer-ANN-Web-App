# Breast Cancer Prediction Web App

This project is a Flask web application that uses a trained Artificial Neural Network (ANN) model to predict whether a breast tumor is **benign** or **malignant** based on user-provided input features.

The project demonstrates a complete machine learning workflow: model training, model saving, and serving predictions through a web interface.

---

## Project Structure

|- [app.py](http://app.py)

|- requirements.txt

|- /model/

     |- model_building.ipynb

     |- breast_cancer_model.pkl

|- /static/

     |- style.css   (optional, if applicable)

|- /templates/

     |- index.html  (if applicable)

     
---

## Requirements

- Python **3.10 or 3.11** (required for TensorFlow on Windows)
- pip
- Virtual environment (recommended)

### Python Libraries
- Flask
- TensorFlow
- NumPy
- Pandas
- scikit-learn

---

## Setup Instructions (Windows)

### 1. Navigate to the Project Folder

```bat
cd "C:\Users\User\Desktop\My AI portfolio\BreastCancer_Project_Akinmusire-Oluwankorinola_250000512"

### 2. Create and Activate a Virtual Environment
py -3.11 -m venv venv
venv\Scripts\activate


You should see (venv) in your terminal.

3. Install Dependencies
pip install flask tensorflow numpy pandas scikit-learn


(Optional but recommended)

pip freeze > requirements.txt

4. Run the Application
python app.py


If successful, you should see:
Loading ANN model...
 * Running on
http://127.0.0.1:5000/
