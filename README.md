# Express Course
[Finished Github Repo](https://github.com/robertbunch/justExpress)

## Pre Express
1. HTTP -> TCP/UDP
2. NodeJS Webserver
3. Internet a network of nodes sending packets

### Packets
* Five layers to every packet
1. Physical     =>  Cables
2. Link         =>  WIFI/Ethernet |
3. Network      =>  IP            |>  TCP/IP
4. Transport    =>  UDP/TCP       |
5. Application  =>  HTTP(S)/F(S)TP/SSH/SMTP

### Your Webserver
Transport layer creates 2^16 ports ~65.000
Ports are like room numbers in a hotel
WS: 49742 =>  SEGMENT               =>  NETWORK           
              Destination port 80       UDP - lightweight/fast 8byte HEADER
              Source: 49742                 - Connectionless
                                            - Consistency => sends data no matter what | UNRELIABLE
                                        TCP - Connection-Based | Three way handshake
                                            - RELIABLE
                                              1. Delivery acknowledgement
                                              2. Retransmission
                                              3. In-order packets
                                              4. Congestion Control 