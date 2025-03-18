import firebase_admin
from firebase_admin import credentials, db  # Import credentials and database modules
import pandas as pd

# Load your CSV file
df = pd.read_csv('Marine_Fish_Data.csv', encoding='UTF-8')
print(df)
df.columns = df.columns.str.upper()
print(df.info())

df['SPECIES_NAME'] = df['SPECIES_NAME'].fillna('Unknown')
df['REGION'] = df['REGION'].fillna('No fish')

print(df['SPECIES_NAME'].head(20))
print(df['REGION'].head(20))

df.to_csv('new_Marine_Fish_Data.csv', encoding='utf-8', index=False)

# Convert DataFrame to dictionary
data_dict = df.to_dict(orient='records')

# Provide the path to your Firebase service account key
cred = credentials.Certificate(
    'C:/Users/19CGaffey.ACC/Desktop/DataCleaning/my-awesome-project-7bcea-firebase-adminsdk-1b6rh-27ce3882e2.json'
)

# Initialize Firebase Admin SDK with Realtime Database URL
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://my-awesome-project-7bcea-default-rtdb.europe-west1.firebasedatabase.app/'
})

# Reference the root node of the Realtime Database
ref = db.reference('/')
ref.set(data_dict)  # Upload data dictionary to Firebase
