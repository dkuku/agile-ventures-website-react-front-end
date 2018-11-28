import eventsReducer from "../reducers/eventsReducer";
import { GET_EVENTS } from "../types";

describe("eventsReducer", () => {
  it("defaults to empty events if none are passed in", () => {
    expect(eventsReducer(undefined, {})).toEqual({ events: [] });
  });

  it("reduces events", () => {
    expect(
      eventsReducer([], {
        type: GET_EVENTS,
        payload: ["Run the tests"]
      })
    ).toEqual({
      events: ["Run the tests"]
    });
  });
});