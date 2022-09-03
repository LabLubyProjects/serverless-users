import axios from "axios";
import { HttpClient, HttpResponse } from "../protocols/http";

class AxiosAdapter implements HttpClient {
  async post(url: string, body?: any): Promise<HttpResponse> {
    const response = await axios.post(url, body);
    return {
      statusCode: response.status,
      body: response.data
    }
  }
  async get(url: string, body?: any): Promise<HttpResponse> {
    const response = await axios.get(url, body);
    return {
      statusCode: response.status,
      body: response.data
    }
  }
  async put(url: string, body?: any): Promise<HttpResponse> {
    const response = await axios.put(url, body);
    return {
      statusCode: response.status,
      body: response.data
    }
  }
  async delete(url: string, body?: any): Promise<HttpResponse> {
    const response = await axios.delete(url, body);
    return {
      statusCode: response.status,
      body: response.data
    }
  }
}

const httpClient = new AxiosAdapter();
export default httpClient;