# Person

- [1. [Optional] Property Person > person](#person)
  - [1.1. [Optional] Property Person > person > children](#person_children)
    - [1.1.1. Person > person > children > person](#autogenerated_heading_2)
  - [1.2. [Optional] Property Person > person > siblings](#person_siblings)

**Title:** Person

|                           |                                                                             |
| ------------------------- | --------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                    |
| **Additional properties** | ![Any type: allowed](https://img.shields.io/badge/Any%20type-allowed-green) |

<details>
<summary>
<strong> <a name="person"></a>1. [Optional] Property Person > person</strong>  

</summary>
<blockquote>

|                           |                                                                             |
| ------------------------- | --------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                    |
| **Additional properties** | ![Any type: allowed](https://img.shields.io/badge/Any%20type-allowed-green) |
| **Defined in**            | #/definitions/person                                                        |

**Description:** A human being

<details>
<summary>
<strong> <a name="person_children"></a>1.1. [Optional] Property Person > person > children</strong>  

</summary>
<blockquote>

|          |         |
| -------- | ------- |
| **Type** | `array` |

**Description:** The children they had

|                      | Array restrictions |
| -------------------- | ------------------ |
| **Min items**        | N/A                |
| **Max items**        | N/A                |
| **Items unicity**    | False              |
| **Additional items** | False              |
| **Tuple validation** | See below          |

| Each item of this array must be  | Description                                       |
| -------------------------------- | ------------------------------------------------- |
| [person](#person_children_items) | Person definition from second file. Not the same! |

#### <a name="autogenerated_heading_2"></a>1.1.1. Person > person > children > person

|                           |                                                                             |
| ------------------------- | --------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                    |
| **Additional properties** | ![Any type: allowed](https://img.shields.io/badge/Any%20type-allowed-green) |
| **Defined in**            | recursive_two_files2.json#/definitions/person                               |

**Description:** Person definition from second file. Not the same!

</blockquote>
</details>

<details>
<summary>
<strong> <a name="person_siblings"></a>1.2. [Optional] Property Person > person > siblings</strong>  

</summary>
<blockquote>

|                           |                                                                             |
| ------------------------- | --------------------------------------------------------------------------- |
| **Type**                  | `object`                                                                    |
| **Additional properties** | ![Any type: allowed](https://img.shields.io/badge/Any%20type-allowed-green) |
| **Same definition as**    | [person_children_items](#person_children_items)                             |

**Description:** Person definition from second file. Not the same!

</blockquote>
</details>

</blockquote>
</details>

----------------------------------------------------------------------------------------------------------------------------
Generated using [json-schema-for-humans](https://github.com/coveooss/json-schema-for-humans)