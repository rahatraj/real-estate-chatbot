from rest_framework.views import APIView
from rest_framework.response import Response
import pandas as pd
import os

from .llm_utils import generate_summary  # ✅ Import the LLM function

EXCEL_PATH = os.path.join(os.path.dirname(__file__), '../Sample_data.xlsx')
df = pd.read_excel(EXCEL_PATH)

class AnalyzeView(APIView):
    def post(self, request):
        query = request.data.get("query", "").lower()
        areas = df['final location'].dropna().unique()
        area = next((a for a in areas if a.lower().strip() in query), None)

        if not area:
            return Response({"error": "No matching area found."})

        area_df = df[df['final location'].str.lower().str.strip() == area.lower().strip()]

        #  Use Gemini-generated summary
        summary = generate_summary(area_df, area)

        # Chart Data
        price_trend = []
        for _, row in area_df.iterrows():
            try:
                low, high = map(int, row['flat - most prevailing rate - range'].split('-'))
                avg_price = (low + high) / 2
            except:
                avg_price = None
            price_trend.append({"year": row["year"], "price": avg_price})

        table_data = area_df.to_dict(orient='records')

        return Response({
            "summary": summary,
            "chartData": price_trend,
            "tableData": table_data
        })
