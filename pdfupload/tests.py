from pytz import timezone 
from datetime import datetime

ind_time = datetime.now(timezone("Asia/Kolkata")).strftime('%Y-%m-%d %H:%M:%S')
print(ind_time)