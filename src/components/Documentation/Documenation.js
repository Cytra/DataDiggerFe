import React from "react"
import CodeBlock from "./CodeBlock";

const examples = [
  {
    title: 'Example 1: Basic Usage',
    description: 'Providing a url to the website you want to scrape',
    request: {
      data: {
        "url": "https://quotes.toscrape.com"
      }
    },
    response: {
      status: 200,
      data: {
      }
    }
  },
  {
    title: 'Example 2: Submitting extractRules',
    description: 'Submitting Extract Rules, that show the info you need. Extract Rules is a dictionary, where the Key is will be inte response and the value is used to scrape the data. In this example we provice the selector object that selects by the HTML element and finds he first H1 element.',
    request: {
      data: {
        "url": "https://quotes.toscrape.com",
        "extractRules": {
          "title": {
            "selector": {
              "element": "h1"
            }
          }
        }
      }
    },
    response: {
      status: 200,
      data: {
        "title": "Quotes to Scrape"
      }
    }
  },
  {
    title: 'Example 3: Other selector options',
    description: 'You can select the elements you need with 3 options: "element" - this can be H1, DIV, A, LINK or any other HTML element, "class" - the element class. "id" - Element Id',
    request: {
      data: {
        "url": "https://quotes.toscrape.com",
        "extractRules": {
          "title": {
            "selector": {
              "element": "h1"
            }
          },
          "titleByClass": {
            "selector": {
              "class": "col-md-8"
            }
          },
          "ById": {
            "selector": {
              "id": "titleId"
            }
          }
        }
      }
    },
    response: {
      status: 200,
      data: {
        "title": "Quotes to Scrape",
        "titleByClass": "Quotes to Scrape",
        "ById": null
      }
    }
  },
  {
    title: 'Example 4: Extract rule with "itemType" of type "list" ',
    description: 'By default all response items have a "itemType" of "item". But you can provide one of these options "item", "list", "tableJson", "tableArray". In this example, we need a list, then the API will fetch all items it can find with provided selector.',
    request: {
      data: {
        "url": "https://quotes.toscrape.com",
        "extractRules": {
          "links": {
            "itemType": "list",
            "selector": {
              "element": "a"
            }
          }
        }
      }
    },
    response: {
      status: 200,
      data: {
        "links": [
          "/",
          "/login",
          "/author/Albert-Einstein",
          "https://www.zyte.com"
        ]
      }
    }
  },
  {
    title: 'Example 5: Extracting "tableJson".',
    description: 'Extracting "tableJson", the response will be a table in JSON form. The item in the selector has to be a Table HTML element',
    request: {
      data: {
        "url": "https://www.scrapingbee.com/documentation/data-extraction/",
        "extractRules": {
          "table": {
            "itemType": "tableJson",
            "selector": {
              "element": "table"
            }
          }
        }
      }
    },
    response: {
      status: 200,
      data: {
        "table": [
          {
            "Feature used": "Rotating Proxy without JavaScript rendering",
            "API credit cost": "1"
          },
          {
            "Feature used": "Rotating Proxy with JavaScript rendering (default)",
            "API credit cost": "5"
          },
          {
            "Feature used": "Premium Proxy without JavaScript rendering",
            "API credit cost": "10"
          },
          {
            "Feature used": "Premium Proxy with JavaScript rendering",
            "API credit cost": "25"
          }
        ]
      }
    },
  },
  {
    title: 'Example 6: Extracting "tableArray"',
    description: 'Extracting "tableArray", the response will be a table in array form.',
    request: {
      data: {
        "url": "https://www.scrapingbee.com/documentation/data-extraction/",
        "extractRules": {
          "table": {
            "itemType": "tableJson",
            "selector": {
              "element": "table"
            }
          }
        }
      }
    },
    response: {
      status: 200,
      data: {
        "table": [
          [
            "Rotating Proxy without JavaScript rendering",
            "1"
          ],
          [
            "Rotating Proxy with JavaScript rendering (default)",
            "5"
          ],
          [
            "Premium Proxy without JavaScript rendering",
            "10"
          ],
          [
            "Premium Proxy with JavaScript rendering",
            "25"
          ]
        ]
      }
    },
  },
  {
    title: 'Example 7: Nested object',
    description: 'Extracting nested Objects. This can be usefull if you have articles and want to have specific items withing the article card',
    request: {
      data: {
        "url": "https://www.scrapingbee.com/blog/",
        "extractRules": {
          "title": {
            "selector": {
              "element": "h1"
            }
          },
          "articles": {
            "selector": {
              "class": "w-full sm:w-1/2 p-10 md:p-28 flex"
            },
            "itemType": "List",
            "output": {
              "link": {
                "selector": {
                  "element": "a"
                }
              },
              "title": {
                "selector": {
                  "element": "h4"
                }
              },
              "description": {
                "selector": {
                  "element": "p"
                }
              }
            }
          }
        }
      }
    },
    response: {
      status: 200,
      data: {
        "title": "The ScrapingBee Blog",
        "articles": [
          {
            "link": "/blog/how-to-scrape-emails-from-any-website-for-sales-prospecting/",
            "title": "How to scrape emails from any website",
            "description": "Learn how to scrape emails from any website, we show you how to bypass bot protection to extract the emails you need."
          },
          {
            "link": "/blog/getting-started-with-apache-nutch/",
            "title": "Getting Started with Apache Nutch",
            "description": "In this tutorial, you will demonstrate how to get started with Apache Nutch, an open source web crawler project by Apache."
          }
        ]
      }
    },
  }
];

const Documenation = () => {
  return (
    <section className="privacy-policy-area ptb-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-12">
            <div className="privacy-policy-content">

              <div>
                <h2>API Documentation</h2>
                <h3>Data Scrapint API endpoint</h3>
                <p>This endpoint is used to submit data in JSON format.</p>
                <div>
                  <ul>
                    <li>Api Url - www.scrapepalapi.com</li>
                    <li>Endpoint - api/v1/explicit-json</li>
                    <li>Method - POST</li>
                  </ul>
                </div>

                <h4>Examples:</h4>
                {examples.map((example, index) => (
                  <div key={index}>
                    <h3>{example.title}</h3>
                    <p>{example.description}</p>
                    <p>Request JSON:</p>
                    <CodeBlock language="json" code={JSON.stringify(example.request.data, null, 2)} />
                    {example.response && (
                      <>
                        <p>Response:</p>
                        <CodeBlock language="json" code={JSON.stringify(example.response.data, null, 2)} />
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Documenation
