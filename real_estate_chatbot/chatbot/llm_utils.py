from langchain_google_genai import ChatGoogleGenerativeAI
from dotenv import load_dotenv
import os

load_dotenv()
os.environ["GOOGLE_API_KEY"] = os.getenv("GEMINI_API_KEY") 

def generate_summary(area_df, area_name):
    years = area_df['year'].tolist()
    prices = []

    for _, row in area_df.iterrows():
        try:
            rate_range = str(row['flat - most prevailing rate - range'])
            low, high = map(int, rate_range.split('-'))
            avg = (low + high) / 2
            prices.append(int(avg))
        except:
            continue

    prompt = f"""
    Analyze real estate trends for the location "{area_name}" using the following data:
    Years: {years}
    Avg Prices: {prices}
    
    Generate a short, human-readable summary of the price trend over time.
    """

    # Fallback summary in case LLM fails
    fallback = f"{area_name.strip()} has shown consistent real estate activity from {min(years)} to {max(years)} with average prices ranging from ₹{min(prices)} to ₹{max(prices)}."

    try:
        model = ChatGoogleGenerativeAI(model="gemini-2.0-flash")
        response = model.invoke(prompt)
        return response.content.strip() if hasattr(response, "content") else str(response)
    except Exception as e:
        print("LLM Error:", str(e))
        return fallback
