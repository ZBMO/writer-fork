import writer as wf

# This is a placeholder to get you started or refresh your memory.
# Delete it or adapt it as necessary.
# Documentation is available at https://dev.writer.com/framework

# Shows in the log when the app starts
print("Hello world!")

driverB = {
"laser_1": {
        "pump1": "+New B 11",
        "pump2": "+New 12",
        "pump3": "+New 13",
        "pump4": "+New 14",
        "pump5": "+New 15",
        "power": "New 5",
        "freq": "New 40mhz",
        "amp": 99,
    },
    "laser_2": {
        "pump1": "+New B 21",
        "pump2": "+New 22",
        "pump3": "+New 23",
        "pump4": "+New 24",
        "pump5": "+New 25",
        "power": "New 5000",
        "freq": "New 40mhz",
        "amp": 11111,
    }
}

driverA = {
"laser_1": {
        "pump1": "+New A 11",
        "pump2": "+New 12",
        "pump3": "+New 13",
        "pump4": "+New 14",
        "pump5": "+New 15",
        "power": "New 5",
        "freq": "New 40mhz",
        "amp": 99,
    },
    "laser_2": {
        "pump1": "+New A 21",
        "pump2": "+New 22",
        "pump3": "+New 23",
        "pump4": "+New 24",
        "pump5": "+New 25",
        "power": "New 5000",
        "freq": "New 40mhz",
        "amp": 11111,
    }
}

# Its name starts with _, so this function won't be exposed
def _update_message(state):
    is_even = state["counter"] % 2 == 0
    message = ("+Even" if is_even else "-Odd")
    state["message"] = message


def sectionChange(state, payload):
    print("sectionChange")
    print(payload)
    state["selectedDriver"] = payload["value"]
    if (payload["value"] == "A"):
        state["laser_1"] = driverA["laser_1"]
        state["laser_2"] = driverA["laser_2"]
    
    if (payload["value"] == "B"):
        state["laser_1"] = driverB["laser_1"]
        state["laser_2"] = driverB["laser_2"]
    

def sectionClick(state, payload):
    print("state: ", state)
    print("payload: ", payload)

def decrement(state):
    state["counter"] -= 1
    _update_message(state)

def increment(state):
    state["counter"] += 1
    # Shows in the log when the event handler is run
    print("The counter has been incremented.")
    _update_message(state)
    
# Initialise the state

# "_my_private_element" won't be serialised or sent to the frontend,
# because it starts with an underscore

initial_state = wf.init_state({
    "my_app": {
        "title": "MY APP"
    },
    "_my_private_element": 1337,
    "message": None,
    "counter": 26,
    "selectedDriver": "",
    "laser_1": {
        "pump1": "+Pass 11",
        "pump2": "+Pass 12",
        "pump3": "+Pass 13",
        "pump4": "+Pass 14",
        "pump5": "+Pass 15",
        "power": "5000",
        "freq": "40mhz",
        "amp": 4,
    },
    "laser_2": {
        "pump1": "+Pass 21",
        "pump2": "+Pass 22",
        "pump3": "+Pass 23",
        "pump4": "+Pass 24",
        "pump5": "+Pass 25",
        "power": "5000",
        "freq": "40mhz",
        "amp": 4,
    }
})

_update_message(initial_state)