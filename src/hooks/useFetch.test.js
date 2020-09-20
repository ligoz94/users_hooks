import { renderHook } from "@testing-library/react-hooks";
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import useFetch from "./useFetch";

test("get users with useFetch", async () => {
  const initialValue = [];
  const shouldExecute = true;
  const mock = new MockAdapter(axios);

  const mockData = "{info: [], results: []}";
  const url = "https://randomuser.me/api?results";
  mock.onGet(url).reply(200, mockData);

  const { result, waitForNextUpdate } = renderHook(() =>
    useFetch({ url, shouldExecute, initialValue })
  );

  expect(result.current.data).toEqual([]);
  expect(result.current.loading).toBeTruthy();

  await waitForNextUpdate();

  expect(result.current.data).toEqual(mockData);
  expect(result.current.loading).toBeFalsy();
});
