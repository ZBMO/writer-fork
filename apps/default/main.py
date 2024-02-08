import streamsync as ss

# This is a placeholder to get you started or refresh your memory.
# Delete it or adapt it as necessary.
# Documentation is available at https://streamsync.cloud

# Shows in the log when the app starts
print("Hello world!")

# Its name starts with _, so this function won't be exposed
def _update_message(state):
    is_even = state["counter"] % 2 == 0
    message = ("+Even" if is_even else "-Odd")
    state["message"] = message

def decrement(state):
    state["counter"] -= 1
    state["regen"]["driver_current"] -= 50
    _update_message(state)

def increment(state):
    state["counter"] += 1
    state["regen"]["driver_current"] += 50
    # Shows in the log when the event handler is run
    print(f"The counter has been incremented.")
    _update_message(state)

def change_handler(state, payload):
    print("change handler")
    print(payload)
    if (payload["control"] == "laser-toggle"):
        state["is_disabled"] = payload["value"]

def click_handler(state, payload):
    if (state["is_disabled"] == "yes"):
        return
    print("click_handler")
    print(payload)
    
# Initialise the state

# "_my_private_element" won't be serialised or sent to the frontend,
# because it starts with an underscore

initial_state = ss.init_state({
    "my_app": {
        "title": "My App"
    },
    "_my_private_element": 1337,
    "message": None,
    "counter": 26,
    "regen": {
        "driver_current": 99,
    },
    "is_disabled": "no",
})

_update_message(initial_state)