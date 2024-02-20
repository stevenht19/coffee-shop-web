type DatoCMSRequest = {
  query: string
  variables?: {}
}

type DatoCMSResponse<T> = {
  data: DatoCMSData<T>
}

type DatoCMSData<T> = {
  [name: string]: T
}

export const performRequest = async <T>({ query, variables = {} }: DatoCMSRequest) => {
  const response = await fetch('https://graphql.datocms.com/', {
    headers: {
      Authorization: `Bearer ${process.env.NEXT_DATOCMS_API_TOKEN}`,
    },
    method: 'POST',
    body: JSON.stringify({ query, variables }),
  });
  
  const responseBody = await response.json()
  
  if (!response.ok) {
    throw new Error(`${response.status} ${response.statusText}: ${JSON.stringify(responseBody)}`);
  }
  
  return responseBody as DatoCMSResponse<T>
}