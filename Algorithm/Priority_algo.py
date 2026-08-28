"""
Priority Algorithm is used to give priority to rooms while cleaning after guest have checkout.
Eg: Two rooms are getting checkout at same time but one get's checkin in next 1hr and another get's checkin after 8hr. Which room should have more priority?
"""
from datetime import datetime


def format_time_until(total_seconds):
    sign = "-" if total_seconds < 0 else ""
    total_minutes = abs(int(total_seconds)) // 60

    years, remainder = divmod(total_minutes, 365 * 24 * 60)
    months, remainder = divmod(remainder, 30 * 24 * 60)
    days, remainder = divmod(remainder, 24 * 60)
    hours, minutes = divmod(remainder, 60)

    return f"{sign}{years:02d}:{months:02d}:{days:02d}:{hours:02d}:{minutes:02d}"


def calculate_arrival_urgency(checkin_time):
    current_time = datetime.now()
    td_seconds = (checkin_time - current_time).total_seconds()
    td_hours = td_seconds / 3600

    if td_seconds < 0:
        raise ValueError(
            "Check-in time is in the past. Enter the upcoming check-in date, "
            "for example 2026-08-31 15:30."
        )

    if td_hours > 6:
        au = 5
    elif 4 < td_hours < 6:
        au = 15
    elif 2 < td_hours < 4:
        au = 30
    elif 1 < td_hours < 2:
        au = 45
    elif 0.5 < td_hours < 1:
        au = 52
    elif 0.25 < td_hours < 0.5:
        au = 57
    else:
        au = 60
    return au, td_hours


def get_guest_priority(customer_type):
    customer_type = customer_type.lower()

    if customer_type == "normal":
        return 0
    elif customer_type == "special":
        return 5
    elif customer_type == "priority":
        return 10
    elif customer_type == "vip":
        return 20
    else:
        raise ValueError("Invalid customer type")

def get_room_factor(room_condition):
    room_condition = room_condition.lower()

    if room_condition == "inspection":
        return 5
    elif room_condition == "normal cleaning":
        return 10
    elif room_condition == "heavy cleaning":
        return 15
    elif room_condition == "maintenance":
        return 20
    else:
        raise ValueError("Invalid room condition")



def calculate_priority(checkin_time, customer_type, room_condition):
    
    au, td_hours = calculate_arrival_urgency(checkin_time)
    vc = get_guest_priority(customer_type)
    k = get_room_factor(room_condition)
    priority_score = au + vc + k

    return {
        "time_until_checkin": td_hours,
        "Au": au,
        "Vc": vc,
        "K": k,
        "Priority Score": priority_score
    }

room_number = input("Enter room number: ")

checkin_input = input("Enter expected check-in time (YYYY-MM-DD HH:MM): ")

customer_type = input("Customer type (normal/special/priority/vip): ")

room_condition = input("Room condition " "(inspection/normal cleaning/heavy cleaning/maintenance): ")

# Convert string to datetime
checkin_time = datetime.strptime(
    checkin_input,
    "%Y-%m-%d %H:%M"
)

try:
    result = calculate_priority(
        checkin_time,
        customer_type,
        room_condition
    )
except ValueError as error:
    print(f"Error: {error}")
    raise SystemExit(1)


print(f" ROOM {room_number}")
print(
    f"Time until check-in : "
    f"{format_time_until((checkin_time - datetime.now()).total_seconds())}"
)

print(f"Arrival Urgency (Au): {result['Au']}")
print(f"Guest Priority (Vc) : {result['Vc']}")
print(f"Room Factor (K)     : {result['K']}")

print("--------------------------------------")

print(
    f"PRIORITY SCORE (Ps) : "
    f"{result['Priority Score']}"
)

print("======================================")