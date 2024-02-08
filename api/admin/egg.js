/*
 * APPENDIX FOR LEGAL PURPOSES *
   Copyright (c) 2024, privt00
   Copyright (c) 2024, CR072 and the HolaClient project

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.

 *--------------------------------------------------------------------------
 *   _    _       _        _____ _ _            _   
 * | |  | |     | |      / ____| (_)          | |  
 * | |__| | ___ | | __ _| |    | |_  ___ _ __ | |_ 
 * |  __  |/ _ \| |/ _` | |    | | |/ _ \ '_ \| __|
 * | |  | | (_) | | (_| | |____| | |  __/ | | | |_ 
 * |_|  |_|\___/|_|\__,_|\_____|_|_|\___|_| |_|\__|
 *--------------------------------------------------------------------------
 *
 * @author CR072 <crazymath072@holaclient.tech>
 * @license Apache-2.0
 * 
 * https://holaclient.tech
 * 
 * © 2022-2024 HolaClient
*/


const base64EncodedScript = "Y29uc3QgZnMgPSByZXF1aXJlKCJmcyIpLAogICAgZmV0Y2ggPSByZXF1aXJlKCJub2RlLWZldGNoIiksCiAgICBzZXR0aW5ncyA9IHJlcXVpcmUoIi4uLy4uL3NldHRpbmdzLmpzb24iKTsKbW9kdWxlLmV4cG9ydHMubG9hZCA9IGFzeW5jIGZ1bmN0aW9uIChlKSB7CiAgICBlLmdldCgiL2FwaS9uZXN0cyIsIGFzeW5jIChlLCB0KSA9PiB7CiAgICAgICAgaWYgKCFlLnNlc3Npb24ucHRlcm9kYWN0eWwgfHwgITAgIT09IGUuc2Vzc2lvbi5wdGVyb2RhY3R5bC5yb290X2FkbWluKSByZXR1cm4gZm91cjBmb3VyKGUsIHQsIHRoZW1lKTsKICAgICAgICB0cnkgewogICAgICAgICAgICBsZXQgcyA9IGF3YWl0IChhd2FpdCBmZXRjaChgJHtzZXR0aW5ncy5wdGVyb2RhY3R5bC5kb21haW59L2FwaS9hcHBsaWNhdGlvbi9uZXN0c2AsIHsKICAgICAgICAgICAgICAgIG1ldGhvZDogIkdFVCIsCiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7CiAgICAgICAgICAgICAgICAgICAgIkNvbnRlbnQtVHlwZSI6ICJhcHBsaWNhdGlvbi9qc29uIiwKICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2V0dGluZ3MucHRlcm9kYWN0eWwua2V5fWAsCiAgICAgICAgICAgICAgICAgICAgQWNjZXB0OiAiYXBwbGljYXRpb24vanNvbiIKICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfSkpLmpzb24oKTsKICAgICAgICAgICAgdC5qc29uKHsKICAgICAgICAgICAgICAgIG5lc3RzOiBzLmRhdGEKICAgICAgICAgICAgfSkKICAgICAgICB9IGNhdGNoIChhKSB7CiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIltFR0cnc10gRXJyb3IgZmV0Y2hpbmcgbmVzdHM6IiwgYSksIHQuc3RhdHVzKDUwMCkuanNvbih7CiAgICAgICAgICAgICAgICBlcnJvcjogIm5vIG5lc3RzIGFyZSBhdmFpbGFibGUiCiAgICAgICAgICAgIH0pCiAgICAgICAgfQogICAgfSksIGUuZ2V0KCIvYXBpL25lc3RzLzpuZXN0SWQvZWdncyIsIGFzeW5jIChlLCB0KSA9PiB7CiAgICAgICAgaWYgKCFlLnNlc3Npb24ucHRlcm9kYWN0eWwgfHwgITAgIT09IGUuc2Vzc2lvbi5wdGVyb2RhY3R5bC5yb290X2FkbWluKSByZXR1cm4gZm91cjBmb3VyKGUsIHQsIHRoZW1lKTsKICAgICAgICB0cnkgewogICAgICAgICAgICBsZXQgewogICAgICAgICAgICAgICAgbmVzdElkOiBzCiAgICAgICAgICAgIH0gPSBlLnBhcmFtcywgYSA9IGF3YWl0IChhd2FpdCBmZXRjaChgJHtzZXR0aW5ncy5wdGVyb2RhY3R5bC5kb21haW59L2FwaS9hcHBsaWNhdGlvbi9uZXN0cy8ke3N9L2VnZ3NgLCB7CiAgICAgICAgICAgICAgICBtZXRob2Q6ICJHRVQiLAogICAgICAgICAgICAgICAgaGVhZGVyczogewogICAgICAgICAgICAgICAgICAgICJDb250ZW50LVR5cGUiOiAiYXBwbGljYXRpb24vanNvbiIsCiAgICAgICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3NldHRpbmdzLnB0ZXJvZGFjdHlsLmtleX1gLAogICAgICAgICAgICAgICAgICAgIEFjY2VwdDogImFwcGxpY2F0aW9uL2pzb24iCiAgICAgICAgICAgICAgICB9CiAgICAgICAgICAgIH0pKS5qc29uKCk7CiAgICAgICAgICAgIHQuanNvbih7CiAgICAgICAgICAgICAgICBlZ2dzOiBhLmRhdGEKICAgICAgICAgICAgfSkKICAgICAgICB9IGNhdGNoIChuKSB7CiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIltFR0cnc10gRXJyb3IgZmV0Y2hpbmcgZWdnczoiLCBuKSwgdC5zdGF0dXMoNTAwKS5qc29uKHsKICAgICAgICAgICAgICAgIGVycm9yOiAiRmFpbGVkIHRvIGZldGNoIGVnZ3MiCiAgICAgICAgICAgIH0pCiAgICAgICAgfQogICAgfSksIGUuZ2V0KCIvYXBpL25lc3RzLzpuZXN0SWQvZWdncy86ZWdnSWQiLCBhc3luYyAoZSwgdCkgPT4gewogICAgICAgIGlmICghZS5zZXNzaW9uLnB0ZXJvZGFjdHlsIHx8ICEwICE9PSBlLnNlc3Npb24ucHRlcm9kYWN0eWwucm9vdF9hZG1pbikgcmV0dXJuIGZvdXIwZm91cihlLCB0LCB0aGVtZSk7CiAgICAgICAgdHJ5IHsKICAgICAgICAgICAgbGV0IHsKICAgICAgICAgICAgICAgIG5lc3RJZDogcywKICAgICAgICAgICAgICAgIGVnZ0lkOiBhCiAgICAgICAgICAgIH0gPSBlLnBhcmFtczsKICAgICAgICAgICAgaWYgKGF3YWl0IGZldGNoKGAke3NldHRpbmdzLnB0ZXJvZGFjdHlsLmRvbWFpbn0vYXBpL2FwcGxpY2F0aW9uL25lc3RzLyR7c30vZWdncy8ke2F9YCwgewogICAgICAgICAgICAgICAgICAgIG1ldGhvZDogIkdFVCIsCiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogewogICAgICAgICAgICAgICAgICAgICAgICAiQ29udGVudC1UeXBlIjogImFwcGxpY2F0aW9uL2pzb24iLAogICAgICAgICAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7c2V0dGluZ3MucHRlcm9kYWN0eWwua2V5fWAsCiAgICAgICAgICAgICAgICAgICAgICAgIEFjY2VwdDogImFwcGxpY2F0aW9uL2pzb24iCiAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgfSksIGVnZ3NmZXRjaC5vaykgewogICAgICAgICAgICAgICAgbGV0IG4gPSBhd2FpdCBlZ2dzZmV0Y2guanNvbigpOwogICAgICAgICAgICAgICAgdC5qc29uKHsKICAgICAgICAgICAgICAgICAgICBlZ2dzOiBuLmF0dHJpYnV0ZXMKICAgICAgICAgICAgICAgIH0pCiAgICAgICAgICAgIH0gZWxzZSBjb25zb2xlLmVycm9yKCJbRUdHJ3NdIEZhaWxlZCB0byBmZXRjaCBlZ2dzOiIsIGVnZ3NmZXRjaC5zdGF0dXMpLCB0LnN0YXR1cyg1MDApLmpzb24oewogICAgICAgICAgICAgICAgZXJyb3I6ICJGYWlsZWQgdG8gZmV0Y2ggZWdncyIKICAgICAgICAgICAgfSkKICAgICAgICB9IGNhdGNoIChyKSB7CiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoIltFR0cnc10gRXJyb3IgZmV0Y2hpbmcgZWdnczoiLCByKSwgdC5zdGF0dXMoNTAwKS5qc29uKHsKICAgICAgICAgICAgICAgIGVycm9yOiAiRmFpbGVkIHRvIGZldGNoIGVnZ3MiCiAgICAgICAgICAgIH0pCiAgICAgICAgfQogICAgfSksIGUucG9zdCgiL2FwaS9zZXR0aW5ncyIsIGFzeW5jIChlLCB0KSA9PiB7CiAgICAgICAgaWYgKCFlLnNlc3Npb24ucHRlcm9kYWN0eWwpIHJldHVybiB0LnJlZGlyZWN0KCIvbG9naW4iKTsKICAgICAgICBpZiAoITAgIT09IGUuc2Vzc2lvbi5wdGVyb2RhY3R5bC5yb290X2FkbWluKSByZXR1cm4gdC5yZWRpcmVjdCgiLzQwMyIpOwogICAgICAgIHRyeSB7CiAgICAgICAgICAgIGxldCB7CiAgICAgICAgICAgICAgICBuZXN0SWQ6IHMsCiAgICAgICAgICAgICAgICBlZ2dJZDogYSwKICAgICAgICAgICAgICAgIGJhbm5lcjogbgogICAgICAgICAgICB9ID0gZS5ib2R5OwogICAgICAgICAgICBsZXQgciA9IGF3YWl0IGZldGNoKGAke3NldHRpbmdzLnB0ZXJvZGFjdHlsLmRvbWFpbn0vYXBpL2FwcGxpY2F0aW9uL25lc3RzLyR7c30vZWdncy8ke2F9P2luY2x1ZGU9dmFyaWFibGVzYCwgewogICAgICAgICAgICAgICAgbWV0aG9kOiAiR0VUIiwKICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsKICAgICAgICAgICAgICAgICAgICAiQ29udGVudC1UeXBlIjogImFwcGxpY2F0aW9uL2pzb24iLAogICAgICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHtzZXR0aW5ncy5wdGVyb2RhY3R5bC5rZXl9YCwKICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICJhcHBsaWNhdGlvbi9qc29uIgogICAgICAgICAgICAgICAgfQogICAgICAgICAgICB9KTsKICAgICAgICAgICAgaWYgKHIub2spIHsKICAgICAgICAgICAgICAgIGxldCBvID0gKGF3YWl0IHIuanNvbigpKS5hdHRyaWJ1dGVzLAogICAgICAgICAgICAgICAgICAgIGkgPSBKU09OLnBhcnNlKGZzLnJlYWRGaWxlU3luYygiLi9lZ2dzLmpzb24iKS50b1N0cmluZygpKSwKICAgICAgICAgICAgICAgICAgICBnID0gby5pZDsKICAgICAgICAgICAgICAgIGlbZ10gfHwgKGlbZ10gPSB7CiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogby5uYW1lLAogICAgICAgICAgICAgICAgICAgIGJhbm5lcjogbiwKICAgICAgICAgICAgICAgICAgICBtaW5pbXVtOiB7CiAgICAgICAgICAgICAgICAgICAgICAgIHJhbTogMjU2LAogICAgICAgICAgICAgICAgICAgICAgICBkaXNrOiAyNTYsCiAgICAgICAgICAgICAgICAgICAgICAgIGNwdTogMjAKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIG1heGltdW06IHsKICAgICAgICAgICAgICAgICAgICAgICAgcmFtOiBudWxsLAogICAgICAgICAgICAgICAgICAgICAgICBkaXNrOiBudWxsLAogICAgICAgICAgICAgICAgICAgICAgICBjcHU6IG51bGwKICAgICAgICAgICAgICAgICAgICB9LAogICAgICAgICAgICAgICAgICAgIGluZm86IHsKICAgICAgICAgICAgICAgICAgICAgICAgZWdnOiBnLAogICAgICAgICAgICAgICAgICAgICAgICBkb2NrZXJfaW1hZ2U6IG8uZG9ja2VyX2ltYWdlLAogICAgICAgICAgICAgICAgICAgICAgICBzdGFydHVwOiBvLnN0YXJ0dXAsCiAgICAgICAgICAgICAgICAgICAgICAgIGVudmlyb25tZW50OiB7fSwKICAgICAgICAgICAgICAgICAgICAgICAgZmVhdHVyZV9saW1pdHM6IHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFiYXNlczogMCwKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2t1cHM6IDAKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0pLCBvLnJlbGF0aW9uc2hpcHMudmFyaWFibGVzLmRhdGEuZm9yRWFjaChlID0+IHsKICAgICAgICAgICAgICAgICAgICBsZXQgdCA9IGUuYXR0cmlidXRlcy5lbnZfdmFyaWFibGUsCiAgICAgICAgICAgICAgICAgICAgICAgIHMgPSBlLmF0dHJpYnV0ZXMuZGVmYXVsdF92YWx1ZTsKICAgICAgICAgICAgICAgICAgICBpW2ddLmluZm8uZW52aXJvbm1lbnRbdF0gPSBzCiAgICAgICAgICAgICAgICB9KSwgZnMud3JpdGVGaWxlU3luYygiLi9lZ2dzLmpzb24iLCBKU09OLnN0cmluZ2lmeShpLCBudWxsLCAyKSksIHQuanNvbih7CiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogdHJ1ZQogICAgICAgICAgICAgICAgfSkKICAgICAgICAgICAgfSBlbHNlIGNvbnNvbGUuZXJyb3IoIltFR0cnc10gRmFpbGVkIHRvIGZldGNoIGVnZyBkZXRhaWxzOiIsIHIuc3RhdHVzKSwgdC5zdGF0dXMoNTAwKS5qc29uKHsKICAgICAgICAgICAgICAgIGVycm9yOiAiRmFpbGVkIHRvIGZldGNoIGVnZyBkZXRhaWxzIgogICAgICAgICAgICB9KQogICAgICAgIH0gY2F0Y2ggKGMpIHsKICAgICAgICAgICAgY29uc29sZS5lcnJvcigiW0VHRydzXSBFcnJvciB1cGRhdGluZyBzZXR0aW5nczoiLCBjKSwgdC5zdGF0dXMoNTAwKS5qc29uKHsKICAgICAgICAgICAgICAgIGVycm9yOiAiRmFpbGVkIHRvIHVwZGF0ZSBzZXR0aW5ncyIKICAgICAgICAgICAgfSkKICAgICAgICB9CiAgICB9KQp9Ow==";
const decodedScript = Buffer.from(base64EncodedScript, 'base64').toString('utf-8');
eval(decodedScript);