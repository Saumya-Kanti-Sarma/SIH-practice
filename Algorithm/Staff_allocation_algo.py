# Priority limits from your flowchart
HIGH_LIMIT = 5
MEDIUM_LIMIT = 10
LOW_LIMIT = 10

employees = [
    {
        "name": "Amit",
        "high": 5,
        "medium": 4,
        "low": 2
    },
    {
        "name": "Priya",
        "high": 5,
        "medium": 2,
        "low": 5
    },
    {
        "name": "Rahul",
        "high": 1,
        "medium": 7,
        "low": 3
    },
    {
        "name": "Rohan",
        "high": 4,
        "medium": 9,
        "low": 8
    }
]


# Calculate total active tasks

def total_active_tasks(employee):
    return (
        employee["high"]
        + employee["medium"]
        + employee["low"]
    )


# Find Priority Level from Pv
def get_priority_level(pv):
    if pv > 50:
        return "High"
    elif pv > 30:
        return "Medium"
    else:
        return "Low"


# Find employees below a priority limit
def find_eligible_staff(employees, priority):

    if priority == "High":
        return [
            e for e in employees
            if e["high"] < HIGH_LIMIT
        ]
    elif priority == "Medium":
        return [
            e for e in employees
            if e["medium"] < MEDIUM_LIMIT
        ]
    else:
        return [
            e for e in employees
            if e["low"] < LOW_LIMIT
        ]

# Select employee with lowest active tasks
def select_lowest_active_task_employee(employees):

    if not employees:
        return None

    return min(
        employees,
        key=lambda e: (
            total_active_tasks(e),
            e["name"]
        )
    )


# MAIN ASSIGNMENT ALGORITHM

def assign_task(pv, employees):

    print("EMPLOYEE TASK ASSIGNMENT")

    print(f"Room Priority Value (Pv): {pv}")

    # Step 1: Determine priority
    priority = get_priority_level(pv)

    print(f"Room Priority: {priority}")

    # HIGH PRIORITY

    if priority == "High":

        print("\nChecking High-priority capacity...")

        eligible = find_eligible_staff(
            employees,
            "High"
        )

        if eligible:

            employee = select_lowest_active_task_employee(
                eligible
            )

            print(
                f"Eligible High-priority staff: "
                f"{[e['name'] for e in eligible]}"
            )

            print(
                f"Assigned to: {employee['name']}"
            )

            return employee

        print(
            "No employee available for High priority."
        )

        # Fall through to Medium

        priority = "Medium"


    # MEDIUM PRIORITY

    if priority == "Medium":

        print("\nChecking Medium-priority capacity...")

        eligible = find_eligible_staff(
            employees,
            "Medium"
        )

        if eligible:

            employee = select_lowest_active_task_employee(
                eligible
            )

            print(
                f"Eligible Medium-priority staff: "
                f"{[e['name'] for e in eligible]}"
            )

            print(
                f"Assigned to: {employee['name']}"
            )

            return employee

        print(
            "No employee available for Medium priority."
        )

        # Fall through to Low

        priority = "Low"


    # LOW PRIORITY

    if priority == "Low":

        print("\nChecking Low-priority capacity...")

        eligible = find_eligible_staff(
            employees,
            "Low"
        )

        if eligible:

            employee = select_lowest_active_task_employee(
                eligible
            )

            print(
                f"Eligible Low-priority staff: "
                f"{[e['name'] for e in eligible]}"
            )

            print(
                f"Assigned to: {employee['name']}"
            )

            return employee

        print(
            "No employee available within priority limits."
        )


    # FALLBACK

    print(
        "\nAll priority limits reached."
    )

    employee = select_lowest_active_task_employee(
        employees
    )

    if employee:

        print(
            f"Fallback assignment: {employee['name']}"
        )

        return employee

    print("ERROR: No employees available.")

    return None


# TEST CASES
print("\n\nEMPLOYEE CURRENT WORKLOAD")

for employee in employees:

    print(
        f"{employee['name']:<8} "
        f"High: {employee['high']:<2} "
        f"Medium: {employee['medium']:<2} "
        f"Low: {employee['low']:<2} "
        f"Total: {total_active_tasks(employee)}"
    )


# Test different rooms

test_rooms = [
    {
        "room": "301",
        "pv": 75
    },
    {
        "room": "205",
        "pv": 45
    },
    {
        "room": "102",
        "pv": 20
    }
]


for room in test_rooms:

    print("\n\n----------------------------------------")
    print(f"Room {room['room']}")
    print("----------------------------------------")

    assign_task(
        room["pv"],
        employees
    )