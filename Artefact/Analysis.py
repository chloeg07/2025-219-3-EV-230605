import pandas as pd
import matplotlib.pyplot as plt
import the_working_code 

# Import the original code
from the_working_code import df

# Perform some basic data analytics
species_count = df['SPECIES_NAME'].value_counts()  # Count occurrences of each species
region_count = df['REGION'].value_counts()  # Count occurrences of each region

# Visualization 1: Bar chart of top 10 species by count
species_count_top10 = species_count.head(10)
plt.figure(figsize=(10, 6))
species_count_top10.plot(kind='bar', color='skyblue', edgecolor='black')
plt.title('Top 10 Species by Count', fontsize=16)
plt.xlabel('Species', fontsize=14)
plt.ylabel('Count', fontsize=14)
plt.xticks(rotation=45, ha='right', fontsize=12)
plt.tight_layout()
plt.savefig('species_bar_chart.png')
plt.show()

# Visualization 2: Pie chart of regions by count
plt.figure(figsize=(8, 8))
region_count.plot(kind='pie', autopct='%1.1f%%', startangle=140, cmap='Set3')
plt.title('Distribution of Regions', fontsize=16)
plt.ylabel('')  # Remove y-axis label for cleaner pie chart
plt.tight_layout()
plt.savefig('regions_pie_chart.png')
plt.show()

# Print key analytics to the console
print("Top 10 Species by Count:")
print(species_count_top10)
print("\nDistribution of Regions:")
print(region_count)
